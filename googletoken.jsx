const responseMessage = (response) => {
    console.log(response);
    const a = decodeToken(response.credential);
    console.log(a);
    setGoogle(a);
  };
  
  
  
  const errorMessage = (error) => {
    console.log(error);
  };





                      <GoogleLogin 
                      onClick={()=>{
                        axios
                        .post("http://localhost:5000/users/register", {
                          fname: google.given_name,
                          lname: google.family_name,
                          email: google.email,
                          password: google.sub,
                          age: google.iat,
                          country: google.jti,
                        })
                        .then((response) => {
                          navigate("/users/login");
                          setSuccess(response.data.message);
                          ;
                        })
                        .catch((err) => {
                          console.log(err);
                          setError(err.response.data.err);
                      })
                        onSuccess={responseMessage}
                    onError={errorMessage} 
                      }}/>
                