import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
} from 'mdb-react-ui-kit';

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);
  return (
    <div><MDBNavbar expand='xxl' light bgColor='' aria-current="true">
    <MDBContainer fluid >
      <MDBNavbarBrand href='#'>
      <img
            src="https://scontent.famm11-1.fna.fbcdn.net/v/t39.30808-6/282161491_102079489189457_679108067387004716_n.png?stp=dst-png_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=52f669&_nc_ohc=zEm817ld6EEAX_nb-cF&_nc_ht=scontent.famm11-1.fna&oh=00_AfBRUxv3m9oW4q0bEnwJELp1XJAmaHw1XH1cZsej1uie6w&oe=65182ED6"
            height="50"
            width="150"
            alt=""
            loading="lazy"
          /></MDBNavbarBrand>

      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowBasic(!showBasic)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar show={showBasic}>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='#'>
                <NavLink to="/"> Home</NavLink>
            
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'><NavLink to="profile">Profile</NavLink></MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'><NavLink to="about">About Us</NavLink></MDBNavbarLink>
          </MDBNavbarItem>
          

          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                Join Us 
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link><NavLink to="register">Register</NavLink></MDBDropdownItem>
                <MDBDropdownItem link><NavLink to="login">Login</NavLink></MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
           
          {/* <MDBNavbarItem>
            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
              Disabled
            </MDBNavbarLink>
          </MDBNavbarItem> */}
        </MDBNavbarNav>

        <form className='d-flex input-group w-auto'>
          <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
          <MDBBtn color='primary'>Search</MDBBtn>
        </form>
       
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Navbar



