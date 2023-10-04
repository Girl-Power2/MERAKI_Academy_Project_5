import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css"
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import {setNotes,addNotes,updateNotes,deleteNotesById} from "../../../service/redux/reducers/notes"
const Note = () => {
 const dispatch=useDispatch()
  const [show, setShow] = useState(false);
const[note,setNote]=useState("")
const[ptId,setPtId]=useState("")
const{token}=useSelector(state=>state.auth)

  const handleClose = () => setShow(false);


  function handleShow() {
    // setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
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
    
  
  </>
  )
}

export default Note