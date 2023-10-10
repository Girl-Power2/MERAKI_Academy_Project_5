import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);


import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText
} from 'mdb-react-ui-kit';


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
  labels: ['female', 'male'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
       
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      
      ],
      borderWidth: 1,
    },
  ],
};



  return (
    <div className="cardsContainer">
       <MDBCard background='secondary' className='text-white mb-3' id="userCard" style={{backgroundColor:"#6a72a3fa"}}>
        <MDBCardHeader>Number of Users</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle className="result" style={{ fontSize: "2rem" }}>{users}</MDBCardTitle>
         
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='secondary' className='text-white mb-3' id="providerCard">
        <MDBCardHeader>Number of Providers</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle className="result" style={{ fontSize: "2rem" }}>{provider}</MDBCardTitle>
         
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='secondary' className='text-white mb-3'  id="categoryCard">
        <MDBCardHeader>Number of Categories</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle className="result" style={{ fontSize: "2rem" }}>{category}</MDBCardTitle>
         
        </MDBCardBody>
      </MDBCard>
     
     
     <MDBCard background='white' id="pieCard" >
     <MDBCardHeader style={{fontFamily:"gorgea" ,fontWeight:"bolder"}}>Male vs Female Provider</MDBCardHeader>
        <MDBCardBody>
        
     <MDBCardText><Pie data={data} /></MDBCardText>
        </MDBCardBody>
      </MDBCard>
      
     
    </div>
    
  );
};

export default Analytics;
