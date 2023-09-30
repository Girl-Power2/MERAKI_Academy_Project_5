import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import"./style.css"
const Schedule = () => {
  const { providerId,isLoggedIn,role } = useSelector((state) => {
    return {
      providerId: state.auth.providerId,
      isLoggedIn:state.auth.isLoggedIn,
      role:state.auth.role
    };
  });

  const [schedules, setSchedules] = useState("");
  const [msg, setMsg] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const getProviderSchedule = () => {
    // console.log(providerId);
    axios
      .get(`http://localhost:5000/schedules/ByProvider/?provider_id=${providerId}`)
      .then((result) => {
        setSchedules(result.data.data);
        setMsg(result.data.message);
        setFname(result.data.data[0].fname);
        setLname(result.data.data[0].lname);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("loggedIn",isLoggedIn);
    console.log("role",role);
    getProviderSchedule();
  }, []);

  return (
    <>
      <div className="container">
        <p>
          {msg} {fname} {lname}
        </p>
        {schedules &&
          schedules.map((s, i) => {
            return (
              <>
                <div key={i} className="times">
                  <span>From:</span> <p>{s.time_from}</p>
                  <span>To:</span>
                  <p> {s.time_to}</p>
                  <button>Choose</button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Schedule;
