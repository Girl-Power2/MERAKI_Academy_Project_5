import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import "./style.css";
import { setSchedule } from "../../service/redux/reducers/schedule";




import React from 'react'

const addSchedule = () => {
    const [timeFrom,setTimeFrom] = useState('24:00');
    const [timeTo,setTimeTo] = useState('24:00');
    const [show, setShow] = useState(false);
    
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch()

    const setSchedules = () => {
        axios
          .post(`http://localhost:5000/schedules/`,{time_from:timeFrom,time_to:timeTo},{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((result) => {
            console.log(result.data);
            dispatch(setSchedule(result.data.data));
            setMsg(result.data.message);
          
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <div>AddSchedule</div>
  )
}

export default AddSchedule
