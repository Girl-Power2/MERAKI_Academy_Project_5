import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { NavLink, useLoaderData, Await } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";

import "../register_provider/app.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Cure App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegisterUser() {
  const [data, setData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    fName: "",
    lName: "",
    birthDate: "",
    city: "",
    role_id: 3,
    gender:"female"
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setData({...data,category_id:e.target.value} );
  };
  const result = useLoaderData;
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
         {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(./Lifesavers - One on One.png)",
            backgroundRepeat: "no-repeat",
            // backgroundColor: (t) =>
            //   t.palette.mode === "light"
            //     ? t.palette.grey[50]
            //     : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        /> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="First Name"
                label="First Name"
                name="First Name"
                autoFocus
                onChange={(e)=>{
                
setData({...data,fName:e.target.value})
               }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Last Name"
                label="Last Name"
                name="Last Name"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,lName:e.target.value})
                                 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="City"
                label="City"
                name="City"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,city:e.target.value})
                                 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Birth Date"
                label="Birth Date 1995-5-25 "
                name="Birth Date"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,birthDate:e.target.value})
                                 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Phone Number"
                label="Phone Number"
                name="Phone Number"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,phoneNumber:e.target.value})
                                 }}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>{
                
                  setData({...data,email:e.target.value})
                                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>{
                
                  setData({...data,password:e.target.value})
                                }}
              />
                               <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                   value={data.gender}
                    label="Gender"
                    name="Gender"
                    onChange={(e)=>{
                
                      setData({...data,gender:e.target.value})
                                 console.log(data);    }}
                  >

                    <MenuItem value="male" >Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    


                  </Select>
                </FormControl>
                              </Box>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>{
                  axios.post("http://localhost:5000/providers/",{fName:data.fName,
                  lName:data.lName,
                  birthDate:data.birthDate,
                  gender:data.gender,
                  email:data.email,
                  password:data.password,
                  city:data.city,
                  phoneNumber:data.phoneNumber,
                  role_id:data.role_id,
                  category_id:data.category_id})
                  .then((result) => {
                    console.log(result.data);
                    setMsg({
                      success: true,
                      msg: result.data?.message,
                    });
                  })
                  .catch((error) => {
                    console.log(error);
                    // setMsg(error.response.data.message);
                    setMsg({
                      success: false,
                      msg: error?.response?.data.message,
                    });
                  });
                }}
              >
                Register
              </Button>
              <p className={`${msg.success ? "pass" : "fail"}`}>{msg.msg}</p>
              <p className={`${msg.success ? "pass" : "fail"}`}>
            {msg.success && (
              <span>
                {msg.msg}
              </span>
            )}
          </p>
              <Grid container>
    
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

