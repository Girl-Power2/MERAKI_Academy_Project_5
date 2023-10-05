import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { MDBSpinner } from "mdb-react-ui-kit";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { addSchedule, deleteSchedule,setBookedCounter } from "../../../service/redux/reducers/schedule";
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
  const {BookedCounter } = useSelector((state) => {
    return { BookedCounter: state.schedule.BookedCounter };
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
  //====================get booked schedules count start=============================
const getBookedCount=()=>{
  axios.get(`http://localhost:5000/schedules/CountBookedByProvider/${providerId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(result=>
    // console.log(result.data)
    dispatch(setBookedCounter(result.data.data[0].bookedcount))
    )
  .catch(err=>console.log(err))
}



  //====================get booked schedules count end=============================

  //====================get schedules start=============================

  const getSchedules = () => {
    axios.get(`http://localhost:5000/schedules/ByProvider/${providerId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result)=>{
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
 getBookedCount()
 
}, [schedule,BookedCounter])


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
    <p> Welcome {mySchedule[0]?.fname[0].toUpperCase() }{mySchedule[0]?.fname.slice(1)} {mySchedule[0]?.lname[0].toUpperCase() }{mySchedule[0]?.lname.slice(1)}  your schedule is:</p>
       <div>Number of booked appointments:{BookedCounter}</div>
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

<div className="tableContainer">
 <Table striped="columns" responsive="lg" bordered="true" hover="true" variant="light">
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Time From</th>
        <th>Time To</th>
        <th>Delete</th>
        <th>Status</th>
        {/* <th>Accept</th>
        <th>Reject</th> */}

        
      </tr>
    </thead>
    
 {mySchedule.map((sc,i)=>{
  return(
   
    <tbody >
      <tr>
        <td>{incNum()}</td>
        <td>{myDates}</td>
        <td>{sc.time_from}</td>
        <td>{sc.time_to} </td>
        <td autoFocus className="btn1" onClick={()=>{
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
          })
        }}>❌</td>
        <td id={sc.booked==true?"green":"red"}>{sc.booked==true?"Booked":"Not Booked"}</td>
        {/* <td className="btn1">👍</td>
        <td className="btn1">👎</td> */}
       
      </tr>
      
    </tbody>
  
  )

 })}</Table></div>
 </> : <MDBSpinner color="danger">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      }
 

    </>
  );
};

export default AddSchedule;
