// import React from 'react'

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}

const bull = (

  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Register() {
  const navigate = useNavigate();
  return (
    <>
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
      <CardContent>

          <CardMedia
            component="img"
            height="194"
            image="https://bucket-thesocialtalks.s3.amazonaws.com/static/article/2021/05/27/Medical_professionals_v2.png"
            alt="Provider"
          />
          <Typography variant="h5" component="div">
            If you are willing to harness your powers to meet the need of care
            seekers,this is the right place to start from!
          </Typography>
        </CardContent>
        <CardActions>

          <NavLink to="/provider">Join Us</NavLink>
         

        </CardActions>
        
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
      <CardContent>
          <CardMedia
            component="img"
            height="194"
            image="https://bucket-thesocialtalks.s3.amazonaws.com/static/article/2021/05/27/Medical_professionals_v2.png"
            alt="Provider"
          />
           <Typography variant="h5" component="div">
            If you are seeking for the best quality of care from experienced
            providers who will come to your house.Register now!
          </Typography>
        </CardContent>
        <CardActions>

          <NavLink to="user">Join Us</NavLink>
         

        </CardActions>
        
      </Card>
      

      
      
      
      
       </>
    );
  }


    </>
  );
}
