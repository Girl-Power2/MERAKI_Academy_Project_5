import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import "./style.css";
import { setQualifications,setBio,setImage } from "../../../service/redux/reducers/provider_info";
import { setService,setPrice_per_hour } from '../../../service/redux/reducers/services';

const Info = () => {
  // ============================common states=================================
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const { providerId, token,bio,qualifications,image } = useSelector((state) => {
  return {
    providerId:state.auth.providerId,
    token:state.auth.token,
    bio:state.info.bio,
    qualifications:state.info.qualifications,
    image:state.info.image,
  }
}

  );
  const{service,price_per_hour}=useSelector((state)=>{
    return{service:state.services.service,
    price_per_hour:state.services.price_per_hour}
    
  })
  // ============================common states=================================

  // ======================first modal states and functions================


  const [url, setUrl] = useState("");

  const insert_info = (urlFile) => {
    axios
      .post(
        `http://localhost:5000/provider_info`,
        {
          bio: bio || "",
          qualifications: qualifications || "",
          img: urlFile || "",
          provider_id: providerId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
        setMsg({ success: true, msg: result.data.message });
      })
      .catch((err) => {
        setMsg({ success: false, msg: err.result.data.message });
      });
  };
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "g9fkkaot");
    data.append("cloud_name", "drzcyo3sv");
    axios
      .post("https:api.cloudinary.com/v1_1/drzcyo3sv/image/upload", data)
      .then((res) => {
        // console.log(data);
        insert_info(res.data.url);
        setUrl(res.data.url);
      })
      .catch((err) => console.log(err));
  };
  // ======================first modal states and functions================

  // ======================second modal states and functions================


  const insert_service = () => {
    axios
      .post(
        `http://localhost:5000/services`,
        {
          service: service || "",
          price_per_hour: price_per_hour || "",
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
      })
      .catch((err) => {
        setMsg({ success: false, msg: err.result.data.message });
      });
  };

  // ======================second modal states and functions================

  return (
    <>
      <div className="welcome">
        Welcome to our team . Please follow the steps to setup your account
      </div>
      <div className="input_container">
        {/* ============================start of first modal==================================================*/}

        {/* <label>
          1.
          <Button variant="primary" onClick={handleShow}>
            Insert info
          </Button>
        </label>

        <Modal show={show} onHide={handleClose}>
          <div className="inputs">
          <Modal.Body>
            <InputGroup>
              <InputGroup.Text>Bio</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="Bio"
                autoFocus
                onChange={(e) => {
                  dispatch(setBio(e.target.value))
                  ;
                }}
              />
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>Qualifications</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="Qualifications"
                autoFocus
                onChange={(e) => {
                  dispatch(setQualifications(e.target.value))
                  ;
                }}
              />
            </InputGroup>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Insert your image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  dispatch(setImage(e.target.files[0]))
                  ;
                }}
              />
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                as="input"
                type="submit"
                value="Submit"
                onClick={() => {
               console.log(image);
                  if (image) {
                    uploadImage();
                  } else {
                    insert_info();
                  }
                }}
              />
             {msg&& <p className={`${msg.success ? "pass" : "fail"}`}>{msg.msg}</p>}
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal> */}

        {/* ============================end of first modal==================================================*/}

 {/* ============================start of second modal==================================================} */}

        <label>
          2.
          <Button variant="primary" onClick={handleShow}>
            Add services
          </Button>
        </label>

        <Modal show={show} onHide={handleClose}>
          <div className="inputs" >
            <Form.Control
              placeholder="Service"
              aria-label="Service"
              aria-describedby="basic-addon1"
              autoFocus
              onChange={(e) => {
                dispatch(setService(e.target.value))
                
              }}
            />

            <InputGroup>
              <InputGroup.Text>Price-per-hour</InputGroup.Text>
              <Form.Control
                
                aria-label="price"
                autoFocus
                onChange={(e) => {
                  dispatch(setPrice_per_hour(e.target.value))
                  
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
    </>
  );
};

export default Info;

//
//
