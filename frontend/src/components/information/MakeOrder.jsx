import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBSpinner } from "mdb-react-ui-kit";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
  const MakeOrder = () => {
    

    
    const [value, setValue] = React.useState();

 const handleChange = (event) => {

   setValue(event.target.value);}

    const {id}=useParams()
    const { service } = useSelector((state) => {
        return {
          service: state.services.service,
        };
      });
    return (
      <div>   
       
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Box>

        <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                   
                  <InputLabel id="demo-simple-select-label">
                    Select The Service 
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Category"
                    name="Category"
                    onChange={handleChange}
                    
                  >
                     {service&&service.map((data,i)=>{
                        
                        return(<div>
                                 <option value={data.service_id}>{data.service}</option>
                         
                        </div>)
                    })}

                   
                  </Select>
                </FormControl>
              </Box>
<hr/>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={data.category_id}
                    label="Category"
                    name="Category"
                    // onChange={(e) => {
                    //   setData((prev)=>
                    //   {return { ...prev, category_id:parseInt( e.target.value) }
                    // })}}
                  >
                    {/* {category &&
                      category.map((categ, i) => {
                        return (
                          
                            
                            <MenuItem key={i} value={categ.category_id}>
                              {categ.category}
                            </MenuItem>
                         
                        );
                      })} */}

                   
                  </Select>
                </FormControl>
              </Box>
              <hr/>
              <Button variant="contained"onClick={()=>{
                axios.post(`http://localhost:5000/orders/`,{service_id, provider_id:id,schedule_id:1})
              }}>Creat Order</Button>
      </div>
    )
  }
  
  export default MakeOrder