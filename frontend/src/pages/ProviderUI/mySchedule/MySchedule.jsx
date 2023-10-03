import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { MDBSpinner } from "mdb-react-ui-kit";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addSchedule } from "../../../service/redux/reducers/schedule";
import React from "react";
//====================component function=============================
const AddSchedule = () => {
  const [timeFrom, setTimeFrom] = useState("24:00");
  const [timeTo, setTimeTo] = useState("24:00");
  const [msg, setMsg] = useState("");
  const [date, setDate] = useState("");
  const[myDates,setMyDates]=useState("")
  const [today, setToday] = useState("");
const[mySchedule,setMySchedule]=useState("")
  const [show, setShow] = useState(false);

  const { schedule } = useSelector((state) => {
    return { schedule: state.schedule.schedule };
  });
  const { providerId } = useSelector((state) => {
    return {
      providerId: state.auth.providerId,
    };
  });
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  //====================end of states=============================

  //====================outer functions start=============================

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setToday(new Date().toISOString().split("T")[0]);
    setShow(true);
  };
  const dispatch = useDispatch();
  //====================get schedules start=============================

  const getSchedules = () => {
    axios.get(`http://localhost:5000/schedules/ByProvider/${providerId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result)=>{
      console.log(result.data.data);
setMySchedule(result.data.data)
setMyDates(new Date().toISOString().split("T")[0]);
    })
    .catch((err)=>{
      console.log(err);
    });
  };
  //====================get schedules end=============================

  //====================use effect start=============================
useEffect(() => {
 getSchedules()

 
}, [])


  //====================use effect end=============================


  //====================add schedules start=============================

  const addSchedules = () => {
    axios
      .post(
        `http://localhost:5000/schedules/`,
        { time_from: timeFrom, time_to: timeTo, DATE: date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        dispatch(
          addSchedule({ time_from: timeFrom, time_to: timeTo, DATE: date })
        );
        setMsg(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //====================add schedules end=============================

  //====================outer functions end=============================
  return (
    <>
      <div className="step">
        <Button variant="primary" onClick={handleShow}>
          Add schedule
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <div className="inputs">
          <label>
            Date:
            <input
              type="date"
              min={today}
              onChange={(e) => {
                console.log(e.target.value);
                setDate(e.target.value);
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
          {msg && <p>{msg.msg}</p>}
          <Button
            as="input"
            type="submit"
            value="Submit"
            onClick={() => {
              addSchedules();
              handleClose();
            }}
          />
        </div>
      </Modal>
 
 {mySchedule?<>
 {mySchedule.map((sc,i)=>{
  return(
    <div className="tableContainer" key={i} >
      <label className="col2">From:{sc.time_from}</label> <br/>
      <label className="col3">to:{sc.time_To} </label> <br/>
      <label className="col1">Date:{myDates} </label> <br/>
    </div>
  )
 })}
 </> : <MDBSpinner color="danger">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      }
 

    </>
  );
};

export default AddSchedule;
