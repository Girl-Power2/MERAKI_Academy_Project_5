import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
// import RegisterProvider from "../../pages/register_provider/RegisterProvider"
const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div>

      <MDBNavbar expand="md" light bgColor="" aria-current="true">

        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              src="./assets/logo.jpg"
              height="70"
              width="90"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <NavLink to="/"> Home</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <NavLink to="/aboutUs">About Us</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <NavLink to="profile">Profile</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Join Us
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem >
                      <NavLink to="/register">Register</NavLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem >
                      <NavLink to="/login">Login</NavLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              {/* <MDBNavbarItem>
            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
              Disabled
            </MDBNavbarLink>
          </MDBNavbarItem> */}
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
    
  );
};

export default Navbar;
