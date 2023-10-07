import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBSpinner } from "mdb-react-ui-kit";

import "./style.css";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

 
} from "mdb-react-ui-kit";
import ProviderSesvice from "./ProviderSesvice";
import MakeOrder from "./MakeOrder";

export default function Information_UserSide() {
  const [info, setInfo] = useState([]);
  const [today ,setToday]=useState()
  const history = useNavigate();
  const [centredModal, setCentredModal] = useState(false);
   const toggleShow = () => setCentredModal(!centredModal);
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/provider_info/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data.result);
        setInfo(result.data.result);//[0]
        setToday(result.data.result[0].birthdate.toString().split('T')[0])

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (info.length == 0) {
    return (
      <MDBSpinner color="danger">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }
  return (
    <div className="tree">
      {info.map((data, i) => {
        return (
          <div key={i} className="data">
            <section style={{ backgroundColor: "#eee" }}>
              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src={data.img}
                        alt="avatar"
                        className="h-100 w-100"
                        style={{ width: "150px" }}
                        height={250}
                        width={250}
                        fluid
                      />
                      <hr />
                      <p className="text-muted mb-1">
                        Name : {data.fname} {data.lname}
                      </p>
                      <p className="text-muted mb-4">Gender : {data.gender}</p>
                      <p className="text-muted mb-4">City : {data.city}</p>
                      
                      <div className="d-flex justify-content-center mb-2">
                       
                       
                      </div>
                    </MDBCardBody>
                  </MDBCard>

                  <MDBCard className="mb-4 mb-lg-0">
                    <MDBCardBody className="p-0">
                      <MDBListGroup flush className="rounded-3">
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                          <MDBIcon fas icon="globe fa-lg text-warning" />
                          <MDBCardText>{data.email}</MDBCardText>
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCardBody>
                  </MDBCard>
                  <br />
                  <MDBBtn
                    onClick={() => {
                      history(`/reveiws/${data.provider_id}`);
                    }}
                  >
                    Reveiws
                  </MDBBtn>
                  
      <>
      <MDBBtn className="ms-1" onClick={toggleShow}>Make Order ?</MDBBtn>

      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Orders</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                <MakeOrder/>
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
           
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
                  <MDBBtn
                    color="danger"
                    className="ms-1"
                    onClick={() => {
                      history(-1);
                    }}
                  >
                    Back
                  </MDBBtn>
                </MDBCol>

                <MDBCol lg="8">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Full Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {data.fname} {data.lname}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                     
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {" "}
                            {data.phonenumber}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Bio</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {data.bio}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Qualifications</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {data.qualifications}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>BrithDate</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {" "}
                            {today}
                          </MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Age</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {" "}
                            {data.age.years}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                    
                  </MDBCard>
                  <ProviderSesvice/>
                </MDBCol>
              </MDBRow>
            </section>
          </div>
        );
      })}
    </div>
  );
}

// export default Information_UserSide
