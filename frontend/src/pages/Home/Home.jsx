import Card from 'react-bootstrap/Card';
import "./style.css"
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React ,{useState} from 'react';
import {
  MDBBtn,
  MDBFooter, MDBRow, MDBCol, MDBIcon, MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';

function Home() {
  const history =useNavigate()
  return (
    <>
    <header>
     
             
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/online-medicine-compositions-set_1284-54433.jpg?w=826&t=st=1696273172~exp=1696273772~hmac=6bf23b58eadc63c698accb800c0e6def64d7d4a385628e2b764798fa5150cba9')", height: '350px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3' >Welcome To Our App</h1>
              <h4 className='mb-3'></h4>
              <MDBBtn tag="a" outline size="lg" onClick={()=>{
                history("/register")
              }}>
                Welcome
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
   <div className="homeCard"  >
   
       

<MDBCard  border='success'  style={{ backgroundColor: "#B2DFDB"}} className='.shadow-2-strong mb-3 ' >
        <MDBCardHeader>About Us</MDBCardHeader>
        <MDBCardBody className='text-dark'style={{ backgroundColor: "#80CBC4" }}>
          {/* <MDBCardTitle>Danger card title</MDBCardTitle> */}
          <MDBCardText>
          We are Cure app for home services, that include health services and more.Which are provided by experienced and highly qualified providers.
          </MDBCardText>
          <NavLink to="/aboutUs"> More About Us</NavLink>
        </MDBCardBody>
      </MDBCard>



    
  
        
<MDBCard shadow='5' border='danger' background='white' className='mb-3 .shadow-5-strong' >
        <MDBCardHeader>Contact Us</MDBCardHeader>
        <MDBCardBody className='text-dark'style={{ backgroundColor: "#ffebcd" }}> 
          {/* <MDBCardTitle>Danger card title</MDBCardTitle> */}
          <MDBCardText>
          We are Cure app for home services, that include health services and more.Which are provided by experienced and highly qualified providers.
          </MDBCardText>
          <NavLink to="/aboutUs"> Contact Us</NavLink>
          
        </MDBCardBody>
      </MDBCard>

    
      <MDBCard shadow='5' border='danger' background='#F5F5F5' className='mb-3 .shadow-5-strong'>
        <MDBCardHeader>Help</MDBCardHeader>
        <MDBCardBody className='text-dark'style={{ backgroundColor: "#ffebcd" }}>
          {/* <MDBCardTitle>Danger card title</MDBCardTitle> */}
          <MDBCardText>
          We are Cure app for home services, that include health services and more.Which are provided by experienced and highly qualified providers.
          </MDBCardText>
          <NavLink to="/aboutUs"> Help</NavLink>
          
        </MDBCardBody>
      </MDBCard>
     
     
  

   </div>
   <Outlet/>
 
   <MDBFooter bgColor='#DCDCDC' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        {/* <MDBContainer className='text-center text-md-start mt-5'> */}
          <MDBRow className='mt-5'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        {/* </MDBContainer> */}
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  
   </>
   
  )
}

export default Home;
