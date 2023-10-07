import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { setLogout } from "../../service/redux/reducers/auth";
// import { googleLogout } from '@react-oauth/google';


// import RegisterProvider from "../../pages/register_provider/RegisterProvider"
const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, role, token, userId, providerId } = useSelector(
    (state) => {
      return {
        isLoggedIn: state.auth.isLoggedIn,
        role: state.auth.role,
        token: state.auth.token,
        userId: state.auth.userId,
        providerId: state.auth.providerId,
      };
    }
  );
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div>
      {/* ====================IF NOT LOGGED IN======================  */}
      <MDBNavbar expand="md" light bgColor="" aria-current="true">
        <MDBContainer fluid>
          <NavLink to="/">
            {" "}
            <img
              src="./assets/newlogo.png"
              height="70"
              width="90"
              alt=""
              loading="lazy"
            />
          </NavLink>
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
              {!isLoggedIn && (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/">
                      <NavLink to=""> Home</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/aboutUs">
                      <NavLink to="/aboutUs">About Us</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        tag="a"
                        className="nav-link"
                        role="button"
                      >
                        Join Us
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>
                          <NavLink to="/register">Register</NavLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <NavLink to="/login">Login</NavLink>
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                </>
             )}
              {/* ====================IF NOT LOGGED IN======================  */}

              {/* ====================IF LOGGED IN======================  */}

              {isLoggedIn && providerId && (
                <>
                
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/My_profile">
                      <NavLink to="/My_profile">My Profile</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem> 
                   <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/services">
                      <NavLink to="/services">My services</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/mySchedule">
                      <NavLink to="/mySchedule">My Schedule</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/myOrders">
                      <NavLink to="/myOrders">My Orders</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/notes">
                      <NavLink to="/notes">My Notes</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink
                      active
                      aria-current="page"
                      href="/"
                      onClick={() => {
                        setLogout();
                        // googleLogout();
                      }}
                    >
                      <NavLink
                        to="/"
                        onClick={() => {
                          dispatch(
                            setLogout({ isLoggedIn, providerId, userId, token })
                          );
                        }}
                      >
                        Logout
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              )}

                {token && userId && (
                <>
                <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/">
                  <NavLink to=""> Home</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/aboutUs">
                  <NavLink to="/aboutUs">About Us</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/category">
                      <NavLink to="category">Category</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/myProfile">
                      <NavLink to="/myProfile">My Profile</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current="page" href="/orders">
                      <NavLink to="/orders">My Orders</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink
                      active
                      aria-current="page"
                      href="/"
                      onClick={() => {
                        setLogout();
                      }}
                    >
                      <NavLink
                        to="/"
                        onClick={() => {
                          dispatch(
                            setLogout({ isLoggedIn, providerId, userId, token })
                          );
                        }}
                      >
                        Logout
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  
                </>
              )}
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn disabled="true" color="primary">
                Search
              </MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    
    </div>
  );
};

export default Navbar;
