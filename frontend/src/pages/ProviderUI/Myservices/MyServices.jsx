import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBSpinner } from "mdb-react-ui-kit";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import {
  setService,
  updateService,
  addService,
  deleteService
} from "../../../service/redux/reducers/services";
const MyServices = () => {
  // ====================states==============================
  const [newService, setNewService] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState("");

  const [serviceNew, setServiceNew] = useState("");
  const [price, setPrice] = useState("");
  const[open,setOpen]=useState(false)

  const { providerId, token } = useSelector((state) => {
    return {
      providerId: state.auth.providerId,
      token: state.auth.token,
    };
  });
  const { service } = useSelector((state) => {
    return {
      service: state.services.service,
    };
  });
  // ====================states==============================

  // ====================functions==============================
  const dispatch = useDispatch();
  const handleClose = () => {setShow(false),setOpen(false)}
  const handleShow = (id) => setShow(id);
  const handleOpen=()=>setOpen(true)

  const getservices = () => {
    axios
      .get(`http://localhost:5000/services/byId/${providerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        dispatch(setService(result.data.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getservices();
  }, []);
  const update_service = (id) => {
    console.log(id);
    axios
      .put(
        `http://localhost:5000/services/${id}`,
        { service: serviceNew, price_per_hour: price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        dispatch(
          updateService({ service: serviceNew, price_per_hour: price, id: id })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const add_service = () => {
    axios
      .post(
        `http://localhost:5000/services`,{
          service: newService ,
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
        setMsgs({ success: true, msg: result.data.message });
        dispatch(addService({
          service: newService ,
          price_per_hour: newPrice ,
          provider_id: providerId,
        }))
      })
      .catch((err) => {
        console.log(err);
        // setMsg({ success: false, msg: err.result.data.message });
      });
  };
  // ====================functions==============================

  return (
    <>
            <button
            onClick={()=>{
              handleOpen()
         
            }}
            >add service</button>
            <Modal show={open} onHide={handleClose}>
                  <div className="inputs">
                    <Modal.Body>
                      <InputGroup>
                        <InputGroup.Text>Service</InputGroup.Text>
                        <Form.Control
                          as="textarea"
                          aria-label="Service update"
                          autoFocus
                          onChange={(e) => {
                            setNewService(e.target.value);
                          }}
                        />
                      </InputGroup>

                      <InputGroup>
                        <InputGroup.Text>Price_per_hour</InputGroup.Text>
                        <Form.Control
                          aria-label="Price_per_hour"
                          autoFocus
                          onChange={(e) => {
                            setNewPrice(e.target.value);
                          }}
                        />
                      </InputGroup>
                    </Modal.Body>
                    <Button
                        as="input"
                        type="submit"
                        value="Submit"
                        onClick={() => {
                          // console.log(ser.service_id);
                          add_service();
                          handleClose()
                          getservices()
                          setTimeout(() => {
                            setMsgs("")
                          }, 2000);
                        }}
                      />
                    </div>
                    
                    </Modal>
                    {msgs && (
                        <p className={`${msgs.success ? "pass" : "fail"}`}>
                          {msgs.msg}
                        </p>
                      )}

      {service ? (
        service.map((ser, i) => {
          return (
            <>
              <div key={i} className="service">
                <h3>{ser.service_id}</h3>
                <h5>{ser.service}</h5>
                <h5>{ser.price_per_hour} JD</h5>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow(ser.service_id);
                    console.log(ser.service_id);
                  }}
                >
                  Edit Service
                </Button>
                <Button variant="primary" onClick={()=>{
                      axios.delete(`http://localhost:5000/services/${ser.service_id}`,{
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }).then((result)=>{
dispatch(deleteService(ser.service_id))
                      }).catch((err)=>{
                        console.log(err);
                      })
                      handleClose()
                    }}>
                        Delete
                      </Button>

                <Modal show={show} onHide={handleClose}>
                  <div className="inputs">
                    <Modal.Body>
                      <InputGroup>
                        <InputGroup.Text>Service</InputGroup.Text>
                        <Form.Control
                          as="textarea"
                          aria-label="Service update"
                          autoFocus
                          onChange={(e) => {
                            setServiceNew(e.target.value);
                          }}
                        />
                      </InputGroup>

                      <InputGroup>
                        <InputGroup.Text>Price_per_hour</InputGroup.Text>
                        <Form.Control
                          aria-label="Price_per_hour"
                          autoFocus
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                      </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                 
                      <Button
                        as="input"
                        type="submit"
                        value="Submit"
                        onClick={(e) => {
                          // console.log(ser.service_id);
                          update_service(show);
                          handleClose()
                        }}
                      />
                      {msg && (
                        <p className={`${msg.success ? "pass" : "fail"}`}>
                          {msg.msg}
                        </p>
                      )}
                      <Button variant="primary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
              </div>
            </>
          );
        })
      ) : (
        <MDBSpinner color="danger">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      )}
    </>
  );
};

export default MyServices;
