import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Doughnut, Pie } from 'react-chartjs-2';
import axios from "axios";
const Analytics = () => {
  const [users, setUsers] = useState(0);
  const [provider, setProvider] = useState(0);
  const [category, setCategory] = useState(0);
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const getUsers = () => {
    axios
      .get(`http://localhost:5000/users/conutOfUsers/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setUsers(result.data.result[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
  };
// ========================Get count functions start====================================
  const getProvider = () => {
    axios
      .get(`http://localhost:5000/providers/all/count/`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setProvider(result.data.data[0].numberofproviders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategory = () => {
    axios
      .get(`http://localhost:5000/categories/countAllCategories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setCategory(result.data.result[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
  };
// ========================Get count functions end====================================




// ========================Get all functions end====================================

  // =========================use effect=============================
  useEffect(() => {
    getUsers();
    getProvider();
    getCategory();
  }, []);
  // =========================use effect=============================

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div className="cardsContainer">
      <div className="cards" id="userCard">
        <p>Number of Users</p>
        <p>
          <span className="result" style={{ fontSize: "2rem" }}>{users}</span>
        </p>
      </div>
      <div className="cards" id="providerCard">
        <p>Number of Providers</p>
        <p>
          <span className="result" style={{ fontSize: "2rem" }}>{provider}</span>
        </p>
      </div>
      <div className="cards" id="categoryCard">
        <p>Number of Categories</p>
        <p>
          <span className="result" style={{ fontSize: "2rem", textDecoration: "" }}>
            {category}
          </span>
        </p>
      </div>

    </div>
  );
};

export default Analytics;
