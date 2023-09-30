import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
 
} from 'mdb-react-ui-kit';
const Login = () => {
  return (
    <div>
        <MDBRow>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody style={{ backgroundColor: "#eee" }}>
          <img
      src='https://homecira.com/wp-content/uploads/elementor/thumbs/home-nursering-puky1xzt99kynvwg2pge12ejrdr67ndqfuz6fniyz8.png'
     height={300} 
     width={400}
    />
            <MDBCardTitle>ARE YOU Seeker ? </MDBCardTitle>
            {/* <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText> */}
            <MDBBtn href='/loginUser'>LOGIN </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody style={{ backgroundColor: "#eee" }}>
          <img
      src='https://media.istockphoto.com/id/697882726/vector/avatars-characters-doctors-and-nurses-set-medical-people-icons-of-faces-on-a-blue-background.jpg?s=170667a&w=0&k=20&c=EeJl70YYHML6F91QnnmyvhHWJw2NJVmybzdCFLdae50='
     height={300} 
     width={400}
    />
            <MDBCardTitle>ARE YOU A PROVIDER ?</MDBCardTitle>
            {/* <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText> */}
            <MDBBtn href='/loginProvider'>LOGIN</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
        {/* <div>
        <NavLink to="/loginUser">Login user</NavLink>
</div>
<div>
        <NavLink to="/loginProvider">Login provider</NavLink>
</div> */}
    </div>
  )
}

export default Login