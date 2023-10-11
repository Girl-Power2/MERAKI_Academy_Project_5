import Card from "react-bootstrap/Card";
import "./style.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  MDBBtn,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

function Home() {
  const history = useNavigate();
  return (
    
    <div style={{overflowX:"hidden"}}>
      <header>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://www.ibanet.org/medias/Health-app-image-banner.jpg?context=bWFzdGVyfHJvb3R8MTI2MTAxfGltYWdlL2pwZWd8YURNeUwyZ3hNUzg0T1RrNE56YzFOVFUwTURjNEwwaGxZV3gwYUNCaGNIQWdhVzFoWjJVZ1ltRnVibVZ5TG1wd1p3fGMzMmQ3ZmYyZGJkMjlmNjA1ZTdkN2YwYjRkNzRlOTcyMjM1NmE4MjhkOWRjN2E5ZjViMDI1YjdjYTg2MGM3ZDk')",
            height: "350px",
            width:'100%'
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Welcome To Our App</h1>
                <h4 className="mb-3"></h4>
                <MDBBtn
                  tag="a"
                  outline
                  size="lg"
                  onClick={() => {
                    history("/register");
                  }}
                >
                  Welcome
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>

{/* <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://img.freepik.com/free-vector/telemedicine-isometric-concept-distance-online-medicine-app-mobile-phone-smartphone-with-doctor-medical-recipe-insurance-policy-tablets-thermometer-glass-flasks-3d-vector-banner_107791-8636.jpg?w=826&t=st=1697063763~exp=1697064363~hmac=0054fc9f5efbe96f6faec1638584c4b206f4be233c063fc9404124bca2c4c254'
        height={500}
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://img.freepik.com/free-vector/medicine-composition-set_1284-71053.jpg?w=900&t=st=1697064346~exp=1697064946~hmac=87a21da14bc28105776411b7e744648ea70aeef612e777a2d64bf8dfb4d93ff2'
        height={500}
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://img.freepik.com/free-vector/time-coronavirus-vaccination-concept-people-can-register-online-receive-vaccine-against-coronavirus_1150-48956.jpg?w=826&t=st=1697064528~exp=1697065128~hmac=77095b2d0a049baca5623fc07d9d091fcfe379bf177f36da9eace439cb6ebc13'
        height={500}
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel> */}
      </header>
      <div className="homeCard">
        <MDBCard
          border="dark"
          style={{ backgroundColor: "#B2DFDB" }}
          className=".shadow-2-strong mb-3 "
        >
          <MDBCardHeader style={{fontSize:"1.5rem",fontFamily:"gorgea"}}>About Us</MDBCardHeader>
          <MDBCardBody
            className="text-dark"
            style={{ backgroundColor: "rgba(128,203,196,.5)"}}
          >
            {/* <MDBCardTitle>Danger card title</MDBCardTitle> */}
            <MDBCardText>
              We are Cure app for home services, that include health services
              and more.Which are provided by experienced and highly qualified
              providers.
            </MDBCardText>
            <NavLink style={{color:"#2F4F4F"}} to="/aboutUs"> More About Us</NavLink>
          </MDBCardBody>
        </MDBCard>

        <MDBCard
          shadow="5"
          border="dark"
          style={{ backgroundColor: "#B2DFDB" }}
          className="mb-3 .shadow-5-strong"
        >
          <MDBCardHeader style={{fontSize:"1.5rem",fontFamily:"gorgea"}}>Contact Us</MDBCardHeader>
          <MDBCardBody
            className="text-dark"
            style={{backgroundColor: "rgba(128,203,196,.5)" }}
          >
            {/* <MDBCardTitle>Danger card title</MDBCardTitle> */}
            <MDBCardText>
            
If you have any questions about us, our reviews, or just want to say hello, please feel free to reach out to us using the contact form below!

            </MDBCardText>
            <NavLink  style={{color:"#2F4F4F"}} to="/contactUs"> Contact Us</NavLink>
          </MDBCardBody>
        </MDBCard>

        <MDBCard
          shadow="5"
          border="dark"
          style={{ backgroundColor: "#B2DFDB" }}
          className="mb-3 .shadow-5-strong"
        >
          <MDBCardHeader style={{fontSize:"1.5rem",fontFamily:"gorgea"}}>Help</MDBCardHeader>
          <MDBCardBody
            className="text-dark"
            style={{ backgroundColor: "rgba(128,203,196,.5)" }}
          >
            {/* <MDBCardTitle>Danger card title</MDBCardTitle> */}
            <MDBCardText>
              We are Cure app for home services, that include health services
              and more.Which are provided by experienced and highly qualified
              providers.
            </MDBCardText>
            <NavLink style={{color:"#2F4F4F"}} to="/aboutUs"> Help</NavLink>
          </MDBCardBody>
        </MDBCard>
      </div>
      <Outlet />

      <MDBFooter
        style={{ backgroundColor: "white"}}
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a
              href="http://linkedin.com/in/hala-joudehabushalbak"
              className="me-4 text-reset"
            >
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
         
          <MDBRow className="mt-5">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Cure App
              </h6>
              <p>
              App of Health care  services  which are provided by providers of different specialities to  a wide range of care seekers at their homes ,which makes it easier  for the patients to get help.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Node.js
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Redux
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Css
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  HTML
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PostgrSQL
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  className="text-reset"
                  onClick={() => {
                    history("/aboutUs");
                  }}
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  onClick={() => {
                    history("/contactUs");
                  }}
                >
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Amman , NY 10012, Jordan
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="duhadahamsheh@gmail.com">duhadahamsheh@gmail.com</a>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="halaj.abushalbak@gmail.com">
                  halaj.abushalbak@gmail.com
                </a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 962 791 026 868
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 962 798 967 357
              </p>
            </MDBCol>
          </MDBRow>
          {/* </MDBContainer> */}
        </section>
      </MDBFooter>
      </div>
   
  );
}

export default Home;
