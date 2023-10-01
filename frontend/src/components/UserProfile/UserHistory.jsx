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
  MDBSpinner
} from "mdb-react-ui-kit";

import {
    setHistory,
    addHistory,
    updateHistory,
    deleteHistoryById,
  } from "../../service/redux/reducers/history";
import RegisterUser from "../../pages/Register/register_users/RegisterUser";

 
  
  const UserHistory = () => {
    
    const [basicModal, setBasicModal] = useState(false);
  const [newHistories ,setNewHistories] = useState("")
  const[newChronic_diseases ,setNewChronic_diseases] =useState("")
  const [newMedications ,setNewMedications]=useState("")
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

    useEffect(()=>{
        axios.get(`http://localhost:5000/history/users/`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }).then((result)=>{
            console.log(result.data);
            dispatch(setHistory(result.data.result))
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
      <div>
          <div className="mb-5">
                        <p className="lead fw-normal mb-1">History</p>
                        {history.map((data ,i)=>{
                            return (<div>

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
                        <>
      <MDBBtn onClick={toggleShow}>Edit History</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
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
            <MDBModalBody> <MDBInput
                                    id="form4Example1"
                                    wrapperClass="mb-4"
                                    label="history"
                                    onChange={(e)=>{
                                        setNewHistories(e.target.value)
                                    }}
                                  />
                                  <MDBInput
                                    type="text"
                                
                                    wrapperClass="mb-4"
                                    label="chronic_diseases" 
                                    onChange={(e)=>{
                                        setNewChronic_diseases(e.target.value)
                                    }}
                                  />
                                  <MDBInput
                                    wrapperClass="mb-4"
                                    textarea
                                   rows={6}
                                    label=" Medications"
                                    onChange={(e)=>{
                                        setNewMedications(e.target.value)
                                    }}
                                  /></MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={()=>{
                axios.put(`http://localhost:5000/history/${data.medical_history_id}`,{history :newHistories,medications:newMedications,
                chronic_diseases:newChronic_diseases},{
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                }).then((result)=>{
                    console.log(result.data);
                    dispatch(updateHistory({history :newHistories,medications:newMedications,
                        chronic_diseases:newChronic_diseases ,id :data.medical_history_id}))
                }).catch((err)=>{
                    console.log(err);
                })
              }}>Save changes</MDBBtn>
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
                          onClick={()=>{
                            axios.delete(`http://localhost:5000/history/${data.medical_history_id}`,{
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                },
                            }).then((result)=>{
                                dispatch(deleteHistoryById(data.medical_history_id))
                            }).catch((err)=>{
                                console.log(err);
                            })
                          }}
                        >
                         Delete History
                        </MDBBtn>
                        
                       </div>)
                        })}
                      </div>
      </div>
    )
  }
  
  export default UserHistory