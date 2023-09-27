// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





function transform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  export default function Register() {
    return (
        <>
      <Card sx={{ width: 1/3, ml: 20 ,mt:'5rem',boxShadow: 10,borderRadius: 2, border: 1 }}>
        <CardContent>
          <CardMedia
          component="img"
          height="194"
          image="https://bucket-thesocialtalks.s3.amazonaws.com/static/article/2021/05/27/Medical_professionals_v2.png"
          alt="Provider"
        />
          <Typography variant="h5" component="div">
            If you are willing to harness your powers to meet the need of care seekers,this is the right place to start from!
          </Typography>
       
        </CardContent>
        <CardActions>
        <NavLink to="register/provider">Join Us</NavLink>
          {/* <Button size="large">Join Us</Button> */}
        </CardActions>
        
      </Card>
      <Card sx={{ width: 1/3, ml: 20 ,mt:'5rem',boxShadow: 10,borderRadius: 2, border: 1 }}>
        <CardContent>
          <CardMedia
          component="img"
          height="194"
          image="https://bucket-thesocialtalks.s3.amazonaws.com/static/article/2021/05/27/Medical_professionals_v2.png"
          alt="Provider"
        />
          <Typography variant="h5" component="div">
            If you are seeking for the best quality of care from experienced providers who will come to your house.Register now!
          </Typography>
       
        </CardContent>
        <CardActions>
        <NavLink to="register/user">Register Now</NavLink>
          {/* <Button size="large">Join Us</Button> */}
        </CardActions>
        
      </Card>
      
      
      
      
      <Outlet/>
       </>
    );
  }
// const Register = () => {
//   return (
//     <div>
//         <h1>Register</h1>
        
//         <nav>
// <NavLink to="register/provider">Register as a provider</NavLink>
// <NavLink to="register/user">Register as a user</NavLink>


//         </nav>






//         <Outlet/>

//     </div>
    
//   )
// }

// export default Register