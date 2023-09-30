import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import "./style.css";
import {
  setHistory,
  addHistory,
  updateHistory,
  deleteHistoryById,
} from "../../service/redux/reducers/history";

const UserProfile = () => {
  const [profile, setProfile] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
const [histories ,setHistories] = useState("")
const[chronic_diseases ,setChronic_diseases] =useState("")
const [medications ,setMedications]=useState("")
  const toggleShow = () => setBasicModal(!basicModal);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const { history } = useSelector((state) => {
    return {
      history: state.history.history,
    };
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data);

        setProfile(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              {profile.map((data, i) => {
               
                return (
                  <div key={i}>
                    <div
                      className="rounded-top text-white d-flex flex-row"
                      style={{ backgroundColor: "#000", height: "200px" }}
                    >
                      <div
                        className="ms-4 mt-5 d-flex flex-column"
                        style={{ width: "150px" }}
                      >
                        <MDBCardImage
                          src="https://cdn.vectorstock.com/i/1000x1000/35/72/young-woman-sick-with-fever-avatar-character-vector-31733572.webp"
                          alt="Generic placeholder image"
                          className="mt-4 mb-2 img-thumbnail"
                          fluid
                          style={{ width: "150px", zIndex: "1" }}
                        />
                      </div>

                      <div className="ms-3" style={{ marginTop: "130px" }}>
                        <MDBTypography tag="h5">
                          {data.firstname} {data.lastname}
                        </MDBTypography>
                        <MDBCardText>{data.city}</MDBCardText>
                      </div>
                    </div>

                    <MDBCardBody className="text-black p-4">
                      <div className="mb-5">
                        <p className="lead fw-normal mb-1">About</p>
                        <div
                          className="p-4"
                          style={{ backgroundColor: "#f8f9fa" }}
                        >
                          <MDBCardText className="font-italic mb-1">
                            Birthdate :{data.birthdate}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-1">
                            Lives in {data.city}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-0">
                            Gender :{data.gender}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-0">
                            Phone Number :{data.phonenumber}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-0">
                            Email :{data.email}
                          </MDBCardText>
                        </div>
                      </div>

                      <div className="mb-5">
                        <p className="lead fw-normal mb-1">History</p>

                        <div
                          className="p-4"
                          style={{ backgroundColor: "#f8f9fa" }}
                        >
                          <MDBCardText className="font-italic mb-1">
                            History: {data.history}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-1"></MDBCardText>
                          <hr />
                          <MDBCardText className="font-italic mb-1">
                            Chronic_Diseases : {data.chronic_diseases}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-1"></MDBCardText>
                          <hr />
                          <MDBCardText className="font-italic mb-0">
                            Medications : {data.medications}
                          </MDBCardText>
                          <MDBCardText className="font-italic mb-0"></MDBCardText>
                        </div>
                        <MDBBtn
                          outline
                          color="dark"
                          className="ms-1"
                          style={{ height: "36px", overflow: "visible" }}
                        >
                          Edit History
                        </MDBBtn>
                        <>
                          <MDBBtn onClick={toggleShow}>Add History</MDBBtn>
                          <MDBModal
                            show={basicModal}
                            setShow={setBasicModal}
                            tabIndex="-1"
                          >
                            <MDBModalDialog>
                              <MDBModalContent>
                                <MDBModalHeader>
                                  <MDBModalTitle>Modal title</MDBModalTitle>
                                  <MDBBtn
                                    className="btn-close"
                                    color="none"
                                    onClick={toggleShow}
                                  ></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>
                                  <MDBInput
                                    id="form4Example1"
                                    wrapperClass="mb-4"
                                    label="history"
                                    onChange={(e)=>{
                                        setHistories(e.target.value)
                                    }}
                                  />
                                  <MDBInput
                                    type="text"
                                
                                    wrapperClass="mb-4"
                                    label="chronic_diseases" 
                                    onChange={(e)=>{
                                        setChronic_diseases(e.target.value)
                                    }}
                                  />
                                  <MDBInput
                                    wrapperClass="mb-4"
                                    textarea
                                   rows={6}
                                    label=" Medications"
                                    onChange={(e)=>{
                                        setMedications(e.target.value)
                                    }}
                                  />

                                  
                                </MDBModalBody>

                                <MDBModalFooter>
                                  <MDBBtn
                                    color="secondary"
                                    onClick={toggleShow}
                                  >
                                    Close
                                  </MDBBtn>
                                  <MDBBtn onClick={()=>{
                                    axios.post(`http://localhost:5000/history/`,{history:histories ,medications,chronic_diseases},{
                                        headers: {
                                          Authorization: `Bearer ${token}`,
                                        },
                                      }).then((result)=>{
                                        console.log(result.data);
                                        dispatch(addHistory(result.data.result))
                                      }).catch((err)=>{
                                        console.log(err);
                                      })
                                  }}>ADD</MDBBtn>
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>
                        </>
                        <MDBBtn
                          outline
                          color="dark"
                          className="ms-1"
                          style={{ height: "36px", overflow: "visible" }}
                        >
                          Delete History
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </div>
                );
              })}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default UserProfile;
