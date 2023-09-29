import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { setReview ,addReview } from "../../service/redux/reducers/reviews";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
  MDBCardText,
  MDBSpinner,
} from "mdb-react-ui-kit";

const Feadback_reviwes = () => {
  const [reveiws, setReveiws] = useState([]);
   const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const history = useNavigate();
  const { token, userId } = useSelector((state) => {
    // console.log(reviews);
    return {
      token: state.auth.token,
      userId: state.auth.userId,
      // reviews:state.reveiws.reviews
    };
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/reviews/provider/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data);
        setReveiws(result.data.result);
        
        // dispatch(setReview(result.data.result))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (reveiws.length==0) {
    return (
      <MDBSpinner color="danger">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }
  return (
    <div>
      <section className="vh-75" style={{ backgroundColor: "#eee" }}>
        <MDBRow>
          <MDBCol sm="6">
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.vectorstock.com/i/1000x1000/35/72/young-woman-sick-with-fever-avatar-character-vector-31733572.webp"
                    // alt="avatar"
                    width="65"
                    height="65"
                  />

                  <div className="w-100">
                    <MDBTypography tag="h5">Add Your Opinion </MDBTypography>
                    {/* <div>
                      <a >
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                        <MDBIcon far icon="star text-danger me-1" />
                      </a>
                    </div> */}
                    <MDBTextArea
                      label="What is your view?"
                      rows={4}
                      onChange={(e) => {
                        setPost(e.target.value);
                      }}
                    />

                    <div className="d-flex justify-content-between mt-3">
                      {/* <MDBBtn color="success">ADD</MDBBtn> */}
                      <MDBBtn
                        color="danger"
                        onClick={() => {
                          axios.post(
                            `http://localhost:5000/reviews/`,
                            { review: post, user_id: userId, provider_id: id },
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          ).then((result)=>{
                            console.log(result.data.result);
                            // setReveiws([...reveiws , result.data.result])
                          //  dispatch(addReview(result.data.result))
                          }).catch((err)=>{
                            console.log(err);
                          })
                        }}
                      >
                        Add <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol sm="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                  <MDBCardText>Reviews </MDBCardText>  
                  </MDBCol>

                  {reveiws.map((comment, i) => {
                    return (
                      <div key={i}>
                        <MDBCol sm="3">
                          <MDBCardText>
                            {comment.firstname} {comment.lastname}{" "}
                          </MDBCardText>
                        </MDBCol>

                        <MDBCol sm="6">
                          <MDBCardText className="text-muted">
                            Patient's Number :{comment.user_id}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                          <MDBCardText className="text-muted">
                            review :{comment.review}
                          </MDBCardText>
                     

                        </MDBCol>
                        <MDBCol sm="6">
                          <MDBCardText className="text-muted">
                            Time :{comment.created_at}
                          </MDBCardText>
                        </MDBCol>
                        
                       
                         <MDBTextArea
                      label="What is your view?"
                      rows={4}
                     
                    /> 
                     <MDBBtn color="success">Update Review</MDBBtn>
                        <hr />
                        
                      </div>
                    );
                  })}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
};

export default Feadback_reviwes;
