import React, { useState } from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import Offcanvas from 'react-bootstrap/Offcanvas';
const AdminNavBar=()=> {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img
              src="https://res.cloudinary.com/drzcyo3sv/image/upload/v1696596722/3_plgdu0.png"
              height="100"
              width="100"
              alt=""
              loading="lazy"
            /></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink  onClick={handleShow}>
        Settings
      </MDBNavbarLink>
            </MDBNavbarItem>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <NavLink to="/addCategory">Add category</NavLink>
        </Offcanvas.Body>
        
      
      </Offcanvas>
            <MDBNavbarItem>
                    <MDBNavbarLink
                      active
                      aria-current="page"
                      href="/cureApp/login"
                      onClick={() => {
                        setLogout();
                        // googleLogout();
                      }}
                    >
                      <NavLink
                        to="/cureApp/login"
                        onClick={() => {
                          dispatch(
                            setLogout({ isLoggedIn, userId,token })
                          );
                        }}
                      >
                        Logout
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
}
export default AdminNavBar