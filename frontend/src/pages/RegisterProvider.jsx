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
    <MDBContainer fluid>

    <MDBRow className='d-flex justify-content-center align-items-center'>

      <MDBCol lg='8'>

        <MDBCard className='my-5 rounded-3' style={{maxWidth: '600px'}}>
          <MDBCardImage src='./img/Lifesavers - One on One.png'/>

          <MDBCardBody className='px-5'>

            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='datepicker mb-4' label='Select a date' id='form2' type='text'/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
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

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Registration code' id='form3' type='text'/>
              </MDBCol>
            </MDBRow>

            <MDBBtn color='success' className='mb-4' size='lg'>Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    </MDBRow>

  </MDBContainer>
);
}

export default RegisterProvider