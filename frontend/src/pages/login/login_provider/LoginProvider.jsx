import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLogin,
  setProviderId,
  setRole,
} from "../../../service/redux/reducers/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "./app.css";

const LoginProvider = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn } = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
    };
  });

  return (
    <div className="loginProviderCard">
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://www.pixelcrayons.com/blog/wp-content/uploads/2021/04/Healthcare-App-Development.jpg"
                height={500}
                width={150}
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                {/* <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">Logo</span>
        </div> */}

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  onClick={() => {
                    axios
                      .post(`http://localhost:5000/users/loginProvider/`, {
                        email,
                        password,
                      })
                      .then((result) => {
                        setMessage({
                          success: true,
                          message: "logged in successfully",
                        });
                        console.log(result.data);
                        dispatch(setLogin(result.data.token));
                        dispatch(setProviderId(result.data.providerId));
                        dispatch(setRole(result.data.role));

                        history("/providerMain");
                        // console.log(isLoggedIn);
                      })
                      .catch((err) => {
                        if (err.response && err.response.data) {
                          return setMessage({
                            success: false,
                            message: err.response.data.message,
                          });
                        }
                      });
                  }}
                >
                  Login
                </MDBBtn>

                <p className={`${message.success ? "pass" : "fail"}`}>
                  {message.success && <span>{message.message}</span>}
                </p>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a
                    style={{ color: "#393f81" }}
                    onClick={() => {
                      history("/provider");
                    }}
                  >
                    Register here
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default LoginProvider;
