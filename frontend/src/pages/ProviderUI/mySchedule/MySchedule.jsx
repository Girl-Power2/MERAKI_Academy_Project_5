import React, { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import {addSchedule,deleteSchedule} from "../../../service/redux/reducers/schedule"
import"./style.css"
const MySchedule = () => {
const dispatch=useDispatch()
  const {schedule}=useSelector((state)=>{
    return {schedule:state.schedule.schedule}
  })
  const { providerId,token } = useSelector((state) => {
    return {
      providerId: state.auth.providerId,
      role:state.auth.role,
token:state.auth.token
    };
  });

  const [msg, setMsg] = useState("");
  const [timeFrom,setTimeFrom] = useState('24:00');
  const [timeTo,setTimeTo] = useState('24:00');

  const addSchedule = () => {
    axios
      .post(`http://localhost:5000/schedules/`,{time_from:timeFrom,time_to:timeTo},{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data);
        dispatch(addSchedule({time_from:timeFrom,time_to:timeTo,provider_id:providerId}));
        setMsg(result.data.message);
      
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   console.log("loggedIn",isLoggedIn);
  //   console.log("role",role);
  //   addSchedule();
  // }, []);

  return (
    <>
     <div>
      <p>Please enter your available times to work</p>
      <label>From:
      <input type="time" min="08:00" max="11:00" name="time_from" required
      onChange={(e)=>{
        console.log(e.target.value);
        setTimeFrom(e.target.value)
      }}
      /></label>
      <label>To:
      <input
              type="time"
              min="08:00"
              max="23:00"
              step="3600"
              value="08:00"
              name="time_from"
              required
              pattern="[0-9]{2}:[0-9]{2}"

        onChange={(e)=>{
          console.log(e.target.value);
          setTimeTo(e.target.value)
        }}
      /></label>
      <button
      onClick={()=>{
        addSchedule()
      }}
      
      >Choose</button>
     </div>
    </>
  );
};

export default MySchedule;
