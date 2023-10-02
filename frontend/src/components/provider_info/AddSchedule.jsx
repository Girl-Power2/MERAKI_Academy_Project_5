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

  //   const today=new Date()
  //  today.setDate(today.getDate())
  //   console.log("today:",today);
//===============================================================================//










//===============================================================================//






const AddSchedule = () => {
  const [timeFrom, setTimeFrom] = useState("24:00");
  const [timeTo, setTimeTo] = useState("24:00");
  const[msg,setMsg]=useState("")
  const [date, setDate] = useState('');
  const [today, setToday] = useState("")

  const [show, setShow] = useState(false);

  const { schedule } = useSelector((state) => {
    return { schedule: state.schedule.schedule };
  });
  const { providerId, token } = useSelector((state) => {
    return {
      providerId: state.auth.providerId,
      token: state.auth.token,
    };
  });
  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setToday(new Date().toISOString().split('T')[0])
    setShow(true)};
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
            min={today}
            onChange={(e)=>{
                console.log(e.target.value);
                setDate(e.target.value)

            }}
            ></input>
          </label>
          <label>
            From:
            <input
              type="time"
              min="08:00"
              max="23:00"
              step="3600"
              value="08:00"
              name="time_from"
              required
              pattern="[0-9]{2}:[0-9]{2}"

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
              max="00"
              step="3600"
              name="time_to"
              value="09:00"
              pattern="[0-9]{2}:[0-9]{2}"

              required
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
