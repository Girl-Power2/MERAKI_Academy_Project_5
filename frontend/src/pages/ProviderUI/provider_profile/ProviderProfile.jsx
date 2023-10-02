import axios from "axios";
import { MDBSpinner } from "mdb-react-ui-kit";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./style.css";
import { updateInfo } from "../../../service/redux/reducers/provider_info";
const ProviderProfile = () => {
  const [information, setInformation] = useState("");
  const [show, setShow] = useState(false);
  const [today, setToday] = useState("");

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
        setInformation(result.data.result[0]);
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
            <span>📞</span><span>{information.phonenumber}</span>
            <p>📧{information.email}</p>
          </div>
          <div className="about">
            <div className="bioContainer">
            <div className="bio">
              bio:
              <br />
              {information.bio}
       {show?(<div> <div onClick={()=>{
setShow(!show)
}}>✏️</div><input type="text"/></div>):<div onClick={()=>{
setShow(!show)
}}>✏️</div> }       
  
</div>
         </div>
            <div className="qualifications">
              <p>
                qualifications:
                <br />
                {information.qualifications}
              </p>
            </div>
            <div className="bio">📍Address <br/>
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
