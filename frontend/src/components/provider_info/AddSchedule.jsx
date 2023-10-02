import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { setSchedule } from "../../service/redux/reducers/schedule";

import React from "react";
import { Link } from "react-router-dom";

    const today=new Date()
//    today.setDate(today.getDate())
    console.log("today:",today);
//===============================================================================//










//===============================================================================//






const AddSchedule = () => {
  const [timeFrom, setTimeFrom] = useState("24:00");
  const [timeTo, setTimeTo] = useState("24:00");
  const[msg,setMsg]=useState("")
  const [date, setDate] = useState('');

  const [show, setShow] = useState(false);

  const { schedule } = useSelector((state) => {
    return { schedule: state.schedule.schedule };
  });
  const { providerId, token } = useSelector((state) => {
    return {
      providerId: state.auth.providerId,
      role: state.auth.role,
      token: state.auth.token,
    };
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const setSchedules = () => {
    axios
      .post(
        `http://localhost:5000/schedules/`,
        { time_from: timeFrom, time_to: timeTo,DATE:date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
    <>
      <div className="step">
        <label>
          3.
          <Button variant="primary" onClick={handleShow}>
            Add schedule
          </Button>
        </label>
      </div>
      <Modal show={show} onHide={handleClose}>
        <div className="inputs">
          <p>
            Please enter your available hours to work you can add more from{" "}
            <Link to="/myschedule">My schedule</Link>
          </p>
          <label>
            Date:
            <input type="date"
            onChange={(e)=>{
                console.log(e.target.value);
if(e.target.value==today){
    console.log("ok");
    setDate(e.target.value)
}
else{
    setMsg({success:false,msg:"please enter a valid date"})
}
            }}
            ></input>
          </label>
          <label>
            From:
            <input
              type="time"
              min="08:00"
              max="11:00"
              name="time_from"
              required
              onChange={(e) => {
                setTimeFrom(e.target.value);
              }}
            />
          </label>
          <label>
            To:
            <input
              type="time"
              min="09:00"
              max="12:00"
              name="time_from"
              onChange={(e) => {
                setTimeTo(e.target.value);
              }}
            />
          </label>
{msg&&<p>{msg.msg}</p>}
          <Button
            as="input"
            type="submit"
            value="Submit"
            onClick={() => {
              setSchedules();
              handleClose();
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default AddSchedule;
