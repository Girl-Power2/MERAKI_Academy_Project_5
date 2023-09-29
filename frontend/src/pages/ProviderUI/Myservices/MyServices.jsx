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
  setPrice_per_hour,
} from "../../../service/redux/reducers/services";
const MyServices = () => {
  // ====================states==============================
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const { providerId, token } = useSelector((state) => {
    return {
      providerId: state.auth.providerId,
      token: state.auth.token,
    };
  });
  const { Price_per_hour, service } = useSelector((state) => {
    return {
      service: state.services.service,

      Price_per_hour: state.services.Price_per_hour,
    };
  });
  // ====================states==============================

  // ====================functions==============================
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getservices = () => {
    console.log(providerId);
    axios
      .get(`http://localhost:5000/services/byId/${providerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (result) => {
        console.log(result.data);
        await dispatch(setService(result.data.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getservices();
  }, []);
  const update_service=()=>{
    axios.put(`http://localhost:5000/services/${ser.service_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }},).then((result)=>{
        console.log(result.data);
        setMsg({success:true,
        msg:result.data.message})
      }).catch((error)=>{
        console.log(err.data.message);
      })
  }

  // ====================functions==============================

  return (
    <>
      {service ? (
        service.map((ser, i) => {
          return (
            <>
              <div key={i} className="service">
                <h5>{ser.service}</h5>
                <h5>{ser.price_per_hour} JD</h5>
                <Button variant="primary" onClick={handleShow}>
                  Edit Service
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
                            dispatch(setService(e.target.value));
                          }}
                        />
                      </InputGroup>

                      <InputGroup>
                        <InputGroup.Text>Price_per_hour</InputGroup.Text>
                        <Form.Control
                          aria-label="Price_per_hour"
                          autoFocus
                          onChange={(e) => {
                            dispatch(setPrice_per_hour(e.target.value));
                          }}
                        />
                      </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        as="input"
                        type="submit"
                        value="Submit"
                        onClick={() => {
                          update_service();
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
