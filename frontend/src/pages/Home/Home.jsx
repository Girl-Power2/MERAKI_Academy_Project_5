import Card from 'react-bootstrap/Card';
import "./style.css"
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
   <header></header>
   <div className="homeCard">
   <Card
        sx={{
          width: 'auto',
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'left',
          ml: 5,
          mr:5,
          mt: "2rem",
          boxShadow: 10,
          borderRadius: 2,
          border: 1,
        }}
        
      >
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
          We are Cure app for home services, that include health services and more.Which are provided by experienced and highly qualified providers.
        </Card.Text>
        
        <NavLink to="/aboutUs"> More About Us</NavLink>
      </Card.Body>
    </Card>
    <Card
        sx={{
          width: 'auto',
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'left',
          ml: 5,
          mr:5,
          mt: "2rem",
          boxShadow: 10,
          borderRadius: 2,
          border: 1,
        }}
        
      >
      <Card.Body>
      <Card.Title>Contact Us</Card.Title>
      
        <Card.Text>
          Contact Us
        </Card.Text>
        <NavLink to="/aboutUs"> Contact Us</NavLink>
      </Card.Body>
    </Card>
    <Card
        sx={{
          width: 'auto',
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          textAlign: 'left',
          ml: 5,
          mr:5,
          mt: "2rem",
          boxShadow: 10,
          borderRadius: 2,
          border: 1,
        }}
        
      >
      <Card.Body>
        <Card.Title>Help</Card.Title>
        <Card.Text>
         Help
        </Card.Text>
        
        <NavLink to="/aboutUs"> Help</NavLink>
      </Card.Body>
    </Card>
    

   </div>
   <Outlet/>
   <footer></footer>
   </>
   
  )
}

export default Home;
