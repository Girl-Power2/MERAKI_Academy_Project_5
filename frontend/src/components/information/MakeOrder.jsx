import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addOrder } from "../../service/redux/reducers/order";
import { setSchedule,updateSchedule } from "../../service/redux/reducers/schedule";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Map from "../Map/Map";
const MakeOrder = () => {
  const navigate=useNavigate()
  const [serv, setServ] = useState();
  const [adress, setAdress] = useState("");
  const [sched, setSched] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const makeOrders =()=>{
    axios
    .post(
      `http://localhost:5000/orders/`,
      {
        service_id: serv,
        provider_id: id,
        schedule_id: sched,
        adress: adress,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((result) => {
      console.log(result.data);
      dispatch(addOrder(result.data.result));
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const { service } = useSelector((state) => {
    return {
      service: state.services.service,
    };
  });
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const { schedule } = useSelector((state) => {
    return {
      schedule: state.schedule.schedule,
    };
  });
  const update =(id)=>{
    axios.put(`http://localhost:5000/schedules/updateBooked/`,{schedule_id:id},{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result)=>{
      console.log(result.data.data);
dispatch(updateSchedule(id))
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(() => {
    axios
      .get(`http://localhost:5000/schedules/ByProvider/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data);
        dispatch(setSchedule(result.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <p>Select A Service </p>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Services</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={serv}
            label="Services"
            name="Services"
            onChange={(e) => {
              setServ(parseInt(e.target.value));
            }}
          >
            {service &&
              service.map((categ, i) => {
                return (
                  <MenuItem key={i} value={categ.service_id}>
                    {categ.service}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Box>
      <hr />
      <p>Select A Time</p>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sched}
            label="Services"
            name="Services"
            onChange={(e) => {
              setSched(parseInt(e.target.value));
            }}
          >
            {schedule &&
              schedule.map((categ, i) => {
                return (
                  <MenuItem key={i} value={categ.schedule_id}>
                    {categ.time_from}-{categ.time_to}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Box>
      <hr />
      Insert Your Adress
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => {
            setAdress(e.target.value);
          }}
        />
      </Box>
      <hr />
      <Button onClick={()=>{
        navigate("/map")
      }}>
Set your location
      </Button>
      <Button
        variant="contained"
        onClick={() => {
         makeOrders()
         update(sched)
        }}
      >
        Creat Order
      </Button>
      {/* <Map/> */}
    </div>
    
  );
};

export default MakeOrder;
