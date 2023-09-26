import { useDispatch,useSelector} from "react-redux";
import axios from "axios";
import { NavLink } from "react-router-dom";
import React,{useState, useEffect } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
}
from 'mdb-react-ui-kit';

const RegisterProvider = () => {
  return (
    <MDBContainer  className='bg-dark h-100'>

    <MDBRow className='d-flex justify-content-center align-items-center h-75 w-100'>
      <MDBCol>

        <MDBCard className='my-4'>

          <MDBRow className='g-0'>

            <MDBCol md='6' className="d-none d-md-block">
              <MDBCardImage src='.\img\Lifesavers - One on One.png' alt="Sample photo" className="rounded-start" fluid/>
            </MDBCol>

            <MDBCol md='6'>

              <MDBCardBody className='text-black d-flex flex-column justify-content-center '>
                <h3 className="mb-5 text-uppercase fw-bold">Student registration form</h3>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                  </MDBCol>

                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>

                <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                  <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                  <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Join Us
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      <NavLink to="register">Register</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <NavLink to="login">Login</NavLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                </div>

                <MDBRow>

                  <MDBCol md='6'>
                  <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Join Us
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      <NavLink to="register">Register</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <NavLink to="login">Login</NavLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                  </MDBCol>

                  <MDBCol md='6'>
                  <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Join Us
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      <NavLink to="register">Register</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <NavLink to="login">Login</NavLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                  </MDBCol>

                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form4' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Course' size='lg' id='form5' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text'/>

                <div className="d-flex justify-content-end pt-3">
                  <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                  <MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                </div>

              </MDBCardBody>

            </MDBCol>
          </MDBRow>

        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
);
}

export default RegisterProvider