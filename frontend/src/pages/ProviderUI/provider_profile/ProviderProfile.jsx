import axios from "axios";
import { MDBSpinner } from "mdb-react-ui-kit";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./style.css";
import {
  updateInfo,
  updateBio,
} from "../../../service/redux/reducers/provider_info";
const ProviderProfile = () => {
  const dispatch = useDispatch();
  const [information, setInformation] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [img, setImg] = useState("");
  const [today, setToday] = useState("");
  const [bio, setBio] = useState("");

  const [qualifications, setQualifications] = useState("");

  const { providerId } = useSelector((state) => {
    return {
      providerId: state.auth.providerId,
    };
  });
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const { info } = useSelector((state) => {
    return { info: state.info.info };
  });
  const get_info = () => {
    axios
      .get(`http://localhost:5000/provider_info/${providerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data.result[0]);
        // const i = result.data.result.length - 1;
        setInformation(result.data.result[0]);
        setImg(result.data.result[i].img);
        setToday(result.data.result[0].birthdate.toString().split("T")[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get_info();
  }, []);

  return (
    <>
      {information ? (
        <div className="infoContainer">
          <div className="providerImg">
            <img src={information.img}></img>
            <p>
              {information.fname} {information.lname}
            </p>
            contact infomarmation: <br />
            <span>📞</span>
            <span>{information.phonenumber}</span>
            <p>📧{information.email}</p>
          </div>
          <div className="about">
              <div className="bio">
                bio:
                <br />
                {information.bio}
                {show1 ? (
                  <div>
                    {" "}
                    <div
                      onClick={() => {
                        setShow1(!show1);
                      }}
                    >
                      ✏️
                    </div>
                    <input
                      type="text"
                      autoFocus
                      placeholder="upadate your bio"
                      style={{ borderRadius: ".5rem", width: "70%" }}
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                    />
                    <p
                      onClick={() => {
                        axios
                          .put(
                            `http://localhost:5000/provider_info/${information.provider_info_id}`,
                            {
                              bio: bio,
                              qualifications: qualifications,
                              img: img || null,
                            },
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then((result) => {
                            console.log(result.data);
                            dispatch(
                              updateInfo({
                                bio: bio,
                                id: information.provider_info_id,
                              })
                            );
                          })
                          .catch((err) => console.log(err));
                        setShow1(!show1);

                        window.location.reload(false);
                      }}
                    >
                      ✅
                    </p>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setShow1(!show1);
                    }}
                  >
                    ✏️
                  </div>
                )}
              </div>
            <div className="qualifications">
              <p>
                qualifications:
                <br />
                {information.qualifications}
              </p>

              {show2 ? (
                <div>
                  <div
                    onClick={() => {
                      setShow2(!show2);
                    }}
                  >
                    ✏️
                  </div>
                  <input
                    type="text"
                    autoFocus
                    placeholder="upadate your qualifications"
                    style={{ borderRadius: ".5rem", width: "70%" }}
                    onChange={(e) => {
                      setQualifications(e.target.value);
                    }}
                  />
                 <p
                      onClick={() => {
                        axios
                          .put(
                            `http://localhost:5000/provider_info/${information.provider_info_id}`,
                            {
                              bio: bio,
                              qualifications: qualifications,
                              img: img || null,
                            },
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then((result) => {
                            console.log(result.data);
                            dispatch(
                              updateInfo({
                                bio: bio,
                                id: information.provider_info_id,
                              })
                            );
                          })
                          .catch((err) => console.log(err));
                        setShow2(!show2);

                        window.location.reload(false);
                      }}
                    >
                      ✅
                    </p>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setShow2(!show2);
                  }}
                >
                  ✏️
                </div>
              )}
            </div>
            <div className="bio">
              📍Address <br />
              {information.city[0].toUpperCase()}
              {information.city.slice(1)}
            </div>
            <div className="bio">
              📅birthdate:
              <br />
              {today}
            </div>
            <div className="bio">
              age:
              <br />
              {information.age.years}
            </div>
          </div>
        </div>
      ) : (
        <MDBSpinner color="danger">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      )}
    </>
  );
};

export default ProviderProfile;
