import React, { useEffect, useState } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import { MDBSpinner } from "mdb-react-ui-kit";


const ProviderAndOrder = () => {

  const [providers,setProviders]=useState([])
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  // ========================Get all functions start====================================
const getAllProviders=()=>{
  axios
  .get(`http://localhost:5000/providers/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((result) => {
    console.log(result);
    setProviders(result.data.data);
  })
  .catch((err) => {
    console.log(err);
  });
}
// ============use effect================
useEffect(() => {
  
  getAllProviders()
}, []);
// ============use effect================
let num = 0;
const incNum = () => {
  if (providers) {
    num++;
  }
  return num;
};
  return (
    
     <Table bordered hover striped="columns" size="sm">
      <thead>
        <tr>
        <th>#</th>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Category</th>
          <th>Number of Services</th>
          <th>Number of Orders</th>
          </tr>
      </thead>
    {providers?(providers.map((provider,i)=>{
      return (
        <>
          <tbody>
        <tr>
          <td>{incNum()}</td>
          <td>{provider.provider_id}</td>
          <td>{provider.fname}</td>
          <td>{provider.lname}</td>
          <td>{provider.email}</td>
          <td>{provider.phonenumber}</td>
          <td>{provider.category}</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      
      </tbody>
        
        
        </>
      )
    })):<MDBSpinner color="danger">
    <span className="visually-hidden">Loading...</span>
  </MDBSpinner>}
  </Table>
  )
}

export default ProviderAndOrder