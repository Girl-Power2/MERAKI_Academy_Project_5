import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { MDBSpinner } from "mdb-react-ui-kit";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addSchedule, deleteSchedule } from "../../../service/redux/reducers/schedule";
import React from "react";
import Table from 'react-bootstrap/Table';

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
  const[isBooked,setIsBooked]=useState("")

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
setIsBooked(result.data.data.booked)
    })
    .catch((err)=>{
      console.log(err);
    });
  };
  //====================get schedules end=============================

  //====================use effect start=============================
useEffect(() => {
 getSchedules()

 
}, [schedule])


  //====================use effect end=============================

  //====================function to add 1 to nubmer of cols=============================
let num=0
const incNum=()=>{
  if(myDates){
    num ++
  }
  return num
}


  //====================function to add 1 to nubmer of cols=============================
  //====================function display booked if booked=============================
  let app=""
const veiwBooked=()=>{
  if(isBooked){
app="Booked"
  }
  else{
    app="Not Booked"
  }
  return app
}


  //====================function display booked if booked=============================


  


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
              placeholder="08:00"
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
              placeholder="09:00"
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
 <Table striped="columns" responsive="md" bordered="true" hover="true" variant="light">
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Time From</th>
        <th>Time To</th>
        <th>Booked</th>
        <th>Delete</th>
      </tr>
    </thead>
    {/* </Table> */}
    
 {mySchedule.map((sc,i)=>{
  return(
    // <Table striped="columns" responsive="md" bordered="true" hover="true" variant="ligth">
   
    <tbody>
      <tr>
        <td>{incNum()}</td>
        <td>{myDates}</td>
        <td>{sc.time_from}</td>
        <td>{sc.time_to} </td>
        
        <td>{sc.booked==true?"Booked":"Not Booked"}</td>
        <button autoFocus onClick={()=>{
          axios.delete(`http://localhost:5000/schedules/ById/${sc.schedule_id}`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((result)=>{
            console.log("from component:",sc.schedule_id);
           console.log(result.data);
            dispatch(deleteSchedule(sc.schedule_id))
            setMsg(result.data.message)
          })
          .catch((error)=>{
            console.log(error);
            // setMsg(error)
          })
        }}>❌</button>
      </tr>
      
    </tbody>
  
  )

 })}</Table>
 </> : <MDBSpinner color="danger">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      }
 

    </>
  );
};

export default AddSchedule;
