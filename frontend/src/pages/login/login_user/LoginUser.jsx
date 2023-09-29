import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./app.css";
import axios from "axios";
import { setLogin, setUserId } from "../../../service/redux/reducers/auth"

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardImage,
  MDBIcon
}
from 'mdb-react-ui-kit';



const LoginUser = () => {
    const dispatch =useDispatch()
    const history =useNavigate()
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [password, setPassword] = useState("");
      const {isLoggedIn} =useSelector((state)=>{
        return {
          isLoggedIn : state.auth.isLoggedIn
        }
      })

      //   useEffect(() => {
//     if (isLoggedIn) {
//      history("/dashboard");
//    }
   
   
//  });
  return (
    <div> <MDBContainer className="my-5">

    <MDBCard>
      <MDBRow className='g-0'>

        <MDBCol md='6'>
          <MDBCardImage src='.\img\Lifesavers - One on One.png' alt="login form" className='rounded-start w-100'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
              <span className="h1 fw-bold mb-0"><img
              src="https://scontent.famm11-1.fna.fbcdn.net/v/t39.30808-6/282161491_102079489189457_679108067387004716_n.png?stp=dst-png_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=52f669&_nc_ohc=zEm817ld6EEAX_nb-cF&_nc_ht=scontent.famm11-1.fna&oh=00_AfBRUxv3m9oW4q0bEnwJELp1XJAmaHw1XH1cZsej1uie6w&oe=65182ED6"
              height="50"
              width="150"
              alt=""
              loading="lazy"
            /></span>
            </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"onChange={(e)=>{
                setEmail(e.target.value)
              }}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>{
                setPassword(e.target.value)
              }}/>

            <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={()=>{
              axios.post(`http://localhost:5000/users/login`,{email,password}).then((result)=>{
                setMessage({success:true,message:"login successfully"});
        console.log(dispatch(setUserId(result.data.userId)));
        dispatch(setLogin(result.data.token))

        dispatch(setUserId(result.data.userId))
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userId", result.data.userId);
        
              }).catch((err)=>{
                if (err.response && err.response.data) {
                  return setMessage({success:false,message:err.response.data.message});
                }
                // setMessage({success:false,message:"Error happened while Login, please try again"});
              })
            }}>Login</MDBBtn>
             <p className={`${message.success ? "pass" : "fail"}`}>
            {message.success && (
              <span>
                {message.message}
              </span>
            )}
          </p>
            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}} onClick={()=>{
              history("/register/user")
            }}>Register here</a></p>

            <div className='d-flex flex-row justify-content-start'>
              <a href="#!" className="small text-muted me-1">Terms of use.</a>
              <a href="#!" className="small text-muted">Privacy policy</a>
            </div>

          </MDBCardBody>
        </MDBCol>

      </MDBRow>
    </MDBCard>

  </MDBContainer></div>
  )
}

export default LoginUser