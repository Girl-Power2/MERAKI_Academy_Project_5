import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import "./style.css";
import { addService} from '../../service/redux/reducers/services';
import React from 'react'
import { Link } from "react-router-dom";

const Service = () => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch()
    const [msg, setMsg] = useState("");
    const [show, setShow] = useState(false);
    const [service, setService] = useState("");
    const [price, setPrice] = useState("");
  const{providerId,token}=useSelector((state)=>{
    return{
        providerId:state.auth.providerId,
    token:state.auth.token, 
    }
   
  })


  const insert_service = () => {
    axios
      .post(
        `http://localhost:5000/services`,{
          service: service ,
          price_per_hour: price ,
          provider_id: providerId,
        },
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        setMsg({ success: true, msg: result.data.message });
        dispatch(addService({
          service: service ,
          price_per_hour: price ,
          provider_id: providerId,
        }))
      })
      .catch((err) => {
        setMsg({ success: false, msg: err.result.data.message });
      });
  };
  return (
    <div>

 {/* ============================start of second modal==================================================} */}
<div className="step"> 
 <label>
          2.
          <Button variant="primary" onClick={handleShow}>
            Add services
          </Button>
        </label>
</div>

        <Modal show={show} onHide={handleClose}>
          
          <div className="inputs" >
            <p>You can add more from <Link to="/services">My services</Link></p>
            <Form.Control
              placeholder="Service"
              aria-label="Service"
              aria-describedby="basic-addon1"
              autoFocus
              onChange={(e) => {
               setService(e.target.value)
                
              }}
            />

            <InputGroup>
              <InputGroup.Text>Price-per-hour</InputGroup.Text>
              <Form.Control
                
                aria-label="price"
                autoFocus
                onChange={(e) => {
                setPrice(e.target.value)
                  
                }}
              />
              <InputGroup.Text>JOD</InputGroup.Text>
            </InputGroup>
            
            <Button
              as="input"
              type="submit"
              value="Submit"
              onClick={() => {
              
                  insert_service();
                  handleClose();
                
                
              }}
            />
          </div>
        </Modal> 
        {/* ============================end of second modal==================================================*/}


    </div>
  )
}

export default Service