import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  setReview,
  addReview,
  updateReview,
  deleteReviewById,
} from "../../service/redux/reducers/reviews";
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
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [post, setPost] = useState("");
  const history = useNavigate();
  const { update, setUpdate } = useState("");
  const [data, setData] = useState(false);
  const { token, userId } = useSelector((state) => {
    // console.log(reviews);
    return {
      token: state.auth.token,
      userId: state.auth.userId,
      // reviews:state.reveiws.reviews
    };
  });
  const { reviews } = useSelector((state) => {
    return {
      reviews: state.reviews.reviews,
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
        setData(true);
        dispatch(setReview(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
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
                          axios
                            .post(
                              `http://localhost:5000/reviews/`,
                              {
                                review: post,
                                user_id: userId,
                                provider_id: id,
                              },
                              {
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                },
                              }
                            )
                            .then((result) => {
                              console.log(result.data.result);
                              // setReveiws([...reveiws , result.data.result])
                              dispatch(addReview(result.data.result));
                            })
                            .catch((err) => {
                              console.log(err);
                            });
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
            <MDBCard className="mb-1 position-relative">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <MDBTypography tag="h5">Reviews</MDBTypography>
                  </MDBCol>

                  {reviews.map((comment, i) => {
                    return (
                      <div key={i}>
                        <MDBCol sm="3">
                          <MDBTypography tag="h5">
                            {comment.firstname} {comment.lastname}
                          </MDBTypography>{" "}
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
                            Created_at :{comment.created_at}
                          </MDBCardText>
                        </MDBCol>

                        {comment.user_id == userId ? (
                          <div>
                            <MDBBtn
                              color="danger"
                              onClick={() => {
                                axios
                                  .delete(
                                    `http://localhost:5000/reviews/${comment.review_id}`,
                                    {
                                      headers: {
                                        Authorization: `Bearer ${token}`,
                                      },
                                    }
                                  )
                                  .then((result) => {
                                    console.log(
                                      dispatch(
                                        deleteReviewById(result.data.result)
                                      )
                                    );
                                    dispatch(
                                      deleteReviewById(result.data.result)
                                    );
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              }}
                            >
                              {" "}
                              X
                            </MDBBtn>
                            <MDBBtn
                              color="success"
                              onClick={() => {
                                setToggle(!toggle);

                                axios
                                  .put(
                                    `http://localhost:5000/reviews/user/${comment.review_id}`,
                                    { review: update, user_id: userId },
                                    {
                                      headers: {
                                        Authorization: `Bearer ${token}`,
                                      },
                                    }
                                  )
                                  .then((result) => {
                                    dispatch(updateReview(result.data.result));
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              }}
                            >
                              Update Review
                            </MDBBtn>
                          </div>
                        ) : (
                          <></>
                        )}
                        {toggle ? (
                          <form>
                            <MDBTextArea
                              label="Update your view?"
                              rows={4}
                              onChange={(e) => {
                                setUpdate(e.target.value);
                              }}
                            />
                          </form>
                        ) : (
                          <></>
                        )}
                        <hr />
                      </div>
                    );
                  })}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBBtn
          color="danger"
          onClick={() => {
            history(-1);
          }}
        >
          Back
        </MDBBtn>
      </section>
    </div>
  );
};

export default Feadback_reviwes;
