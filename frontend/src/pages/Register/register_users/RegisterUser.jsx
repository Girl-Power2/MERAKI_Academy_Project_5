import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { NavLink, useLoaderData, Await } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import "../register_provider/app.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { MDBBtn } from "mdb-react-ui-kit";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Cure App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegisterUser() {
  const[google,setGoogle]=useState("")
  const history=useNavigate()
  const responseMessage = (response) => {
    console.log(response);
    const a = decodeToken(response.credential);
    console.log(a);
    setGoogle(a);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const [data, setData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    fName: "",
    lName: "",
    birthDate: "",
    city: "",
    role_id:2,
    gender:"female"
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setData({...data,category_id:e.target.value} );
  };
  const result = useLoaderData;
 


  return (
    <>
    
    <ThemeProvider theme={defaultTheme}>
      <div style={{maxHeight:'50vh'}}>
      <Grid container component="main" sx={{ maxHeight: "50vh" }}>
        <CssBaseline />
     <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://www.appstudio.ca/blog/wp-content/uploads/2020/10/Healthcare-Mobile-App-Development.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxHeight:"90vh"
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <MDBBtn onClick={()=>{
                        axios
                        .post("http://localhost:5000/users/register", {
                          firstname: google.given_name,
                          lastname: google.family_name,
                          email: google.email,
                          password: google.azp,
                          birthdate:"2000-7-7",
                          phonenumber:google.aud,
                          role_id:2,
                          city: google.jti,
                          gender:google.iss,
                          
                        })
                        .then((response) => {
                          history("/loginUser");
                         
                          console.log(response)
                        })
                        .catch((err) => {
                      
                          console.log(err)
                      })}}>
    <GoogleOAuthProvider clientId="244732940096-98vg905q4amiojtd94ikgdh12rh7p20d.apps.googleusercontent.com">
    <GoogleLogin 

     onSuccess={responseMessage}
 onError={errorMessage} 
 
   />
    </GoogleOAuthProvider></MDBBtn>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "60vh" 
            }}
          >
            
            <Avatar sx={{ m:0, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            
            <Typography component="h1" variant="h5">
              Register
            </Typography>

            <Box
              component="form"
              noValidate
              
              sx={{ mt: 1 ,maxHeight:'70vh'}}
            >
              <TextField
                margin="normal"
                required
               
                id="First Name"
                label="First Name"
                name="First Name"
                autoFocus 
                style={{marginRight:'0.5rem'}}
                onChange={(e)=>{
                  
setData({...data,fName:e.target.value})
               }}
              />
              <TextField
                margin="normal"
                required
                style={{marginLeft:'0.5rem'}}
                id="Last Name"
                label="Last Name"
                name="Last Name"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,lName:e.target.value})
                                 }}
              />
              <TextField
                margin="normal"
                style={{marginRight:'0.5rem'}}
                required
                id="City"
                label="City"
                name="City"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,city:e.target.value})
                                 }}
              />
              <TextField
                margin="normal"
                required
                style={{marginLeft:'0.5rem'}}
                id="Birth Date"
                label="Birth Date 1995-5-25 "
                name="Birth Date"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,birthDate:e.target.value})
                                 }}
              />
              <TextField
                margin="normal"
                required
                style={{marginRight:'0.5rem'}}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,email:e.target.value})
                                }}
              />
              <TextField
                margin="normal"
                required
                style={{marginLeft:'0.5rem'}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>{
                
                  setData({...data,password:e.target.value})
                                }}
              />
              <div className="select_container">
              <TextField
                margin="normal"
                required
                style={{marginRight:'0.5rem'}}
                id="Phone Number"
                label="Phone Number"
                name="Phone Number"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,phoneNumber:e.target.value})
                                 }}
              />
               <Box sx={{ minWidth: 120 }}>
                <FormControl style={{marginRight:'0.5rem' ,width:'100%' ,paddingTop:'1rem' ,paddingLeft:'1rem'}}  >
                  <InputLabel id="demo-simple-select-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                   value={data.gender}
                    label="Gender"
                    name="Gender"
                    onChange={(e)=>{
                
                      setData({...data,gender:e.target.value})
                                    }}
                  >

                    <MenuItem value="male" >Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    


                  </Select>
                </FormControl>
                              </Box>
                              </div>
              
             
              <Button
                
            
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>{
console.log(data);
                  
                  axios.post("http://localhost:5000/users/register",{firstname:data.fName,
                  lastname:data.lName,
                  birthdate:data.birthDate,

                  gender:data.gender,
                  email:data.email,
                  password:data.password,
                  city:data.city,
                  phonenumber:data.phoneNumber,
                  role_id:data.role_id,
                  })
                  .then((result) => {
                    console.log(result.data);
                    setMsg({
                      success: true,
                      msg: result.data?.message,
                    });
                    history('/loginUser')
                  })
                  .catch((error) => {
                    console.log(error);
                    
                    setMsg({
                      success: false,
                      msg: error?.response?.data.message,
                    });
                  });
                }}
              >
                Register
              </Button>

             
              <p className={`${msg.success ? "pass" : "fail"}`}>{msg.msg}</p>
              <p className={`${msg.success ? "pass" : "fail"}`}>
            {msg.success && (
              <span>
                {msg.msg}
              </span>
            )}
          </p>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
      </div>
    </ThemeProvider>
    </>
  );
}

