import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css"
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { MDBSpinner } from "mdb-react-ui-kit";
import { useDispatch,useSelector } from 'react-redux';
import  {setNotes,addNotes,updateNotes,deleteNotesById, notes} from "../../../service/redux/reducers/notes"
const Note = () => {
 const dispatch=useDispatch()
  const [show, setShow] = useState(false);
const[note,setNote]=useState("")
const[ptId,setPtId]=useState("")
const{token}=useSelector(state=>state.auth)
const{providerId}=useSelector(state=>state.auth)
const [today, setToday] = useState("");
const [query, setQuery] = useState("");



const{notes}=useSelector(state=>state.notes)
  const handleClose = () => setShow(false);


  function handleShow() {
    setShow(true);
  }
  // ==========get all notes===================
  const getNotes=()=>{
   axios.get(`http://localhost:5000/notes/byProvider/`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((result)=>{dispatch(setNotes(result.data.data))
  setToday(result.data.data[0].visitied_on.toString().split("T")[0])
  })
  
  .catch((err)=>{
    console.log(err);
  })
   
  }
  // ==========get all notes===================

  useEffect(() => {
   getNotes()
  }, [])
  // ==========get user notes===================

  const getUserNotes=()=>{
    axios.get(`http://localhost:5000/notes/byUser/usernotes/?id=${parseInt(query)}`,{
     headers: {
       Authorization: `Bearer ${token}`,
     },
   })
   .then((result)=>{
  console.log(result.data.data);
    dispatch(setNotes(result.data.data))
   setToday(result.data.data[0].visitied_on.toString().split("T")[0])
   })
   
   .catch((err)=>{
     console.log(err);
   })
    
   }








  // ==========get user notes===================


  return (
    <>
    <div className='pageContainer'>
    <div className='notesContainer'>
      <img className='noteimg' src='./assets\Lifesavers - Bust.png'/>
      <button className='inline' onClick={() => handleShow()}>add note</button>
    </div>
    <Modal show={show}  onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Patient ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="patient ID number"
              autoFocus
              onChange={(e)=>{
                setPtId(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Provider's note</Form.Label>
            <Form.Control as="textarea" rows={5}
             onChange={(e)=>{
              setNote(e.target.value)
            }} />
          </Form.Group>
        </Form>
      </Modal.Body>
     <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{
          handleClose()
          axios.post(`http://localhost:5000/notes/`,{user_id:ptId,note:note},{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((result)=>{
            console.log(result.data);
            dispatch(setNotes(result.data.data))
          }).catch(err=>console.log(err))
        }}>
          Save Note
        </Button>
      </Modal.Footer>
    </Modal>
    <div className='myNotesContainer'>
      <input type="text" placeholder='Search for note by client Id' onChange={(e)=>{
        setQuery(e.target.value)
      }}/><button onClick={()=>{
        getUserNotes()
      }}>Search</button>
{notes?notes.map((note,i)=>{
  return( <div key={i} className='pNote'><div> 
   <p><span>Client Id</span>{note.user_id}</p> 
   <p><span>Note</span> {note.note}</p> 
   <p><span>Visitied on</span> {today}</p> 


   
   
   
    </div></div>)
}):<MDBSpinner color="danger">
<span className="visually-hidden">Loading...</span>
</MDBSpinner>}
    </div>
    </div>
  
  </>
  )
}
export default Note