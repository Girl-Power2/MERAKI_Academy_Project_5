import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setProviderId,setRole } from "../../../service/redux/reducers/auth";
import {
  MDBBtn,
  MDBContainer,
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
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm="6">
            <div className="d-flex flex-row ps-5 pt-5">
              <MDBIcon
                fas
                icon="crow fa-3x me-3"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">
           
                <img
                  src="https://scontent.famm11-1.fna.fbcdn.net/v/t39.30808-6/282161491_102079489189457_679108067387004716_n.png?stp=dst-png_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=52f669&_nc_ohc=zEm817ld6EEAX_nb-cF&_nc_ht=scontent.famm11-1.fna&oh=00_AfBRUxv3m9oW4q0bEnwJELp1XJAmaHw1XH1cZsej1uie6w&oe=65182ED6"
                  height="75"
                  width="150"
                  alt=""
                  loading="lazy"
                />
              </span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3
                className="fw-normal mb-3 ps-5 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Log in
              </h3>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="formControlLg1"
                type="email"
                size="lg"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <MDBBtn
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                size="lg"
                onClick={() => {
                 
                  axios
                    .post(`http://localhost:5000/users/loginProvider/`, {
                      email,
                      password,
                    })
                    .then((result) => {
                      console.log(result.data);
                      setMessage({
                        success: true,
                        message: "logged in successfully",
                      });
                      dispatch(setLogin(result.data.token));
                      dispatch(setProviderId(result.data.providerId));
                      dispatch(setRole(result.data.role));

                    
                       history("/providerMain");
                    })
                    .catch((err) => {
                      if (err.response && err.response.data) {
                        return setMessage({
                          success: false,
                          message: err.response.data.message,
                        });
                      }
                      // setMessage({success:false,message:"Error happened while Login, please try again"});
                    });
                }}
              >
                Login
              </MDBBtn>

              {/* <p className={`${message.success ? "pass" : "fail"}`}>{message.message}</p> */}
              <p className={`${message.success ? "pass" : "fail"}`}>
                {message.success && <span>{message.message}</span>}
              </p>
              <p className="ms-5">
                Don't have an account?{" "}
                <a
                  href="#!"
                  class="link-info"
                  onClick={() => {
                    history("/provider");
                  }}
                >
                  Register here
                </a>
              </p>
            </div>
          </MDBCol>

          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <img
              src=".\img\Lifesavers - One on One.png"
              alt="Login image"
              className="w-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <Outlet/> */}
    </div>
  );
};

export default LoginProvider;
