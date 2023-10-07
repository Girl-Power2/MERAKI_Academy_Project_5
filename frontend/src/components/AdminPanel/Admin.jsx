import React ,{useEffect, useState}from 'react'
import AdminNavBar from './AdminNavBar'
import { useSelector, useDispatch } from "react-redux";

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import axios from 'axios';

const Admin = () => {
const [users ,setUsers]=useState(0)
const [provider ,setProvider]=useState(0)
const [category ,setCategory]=useState(0)
const { token } = useSelector((state) => {
  
  return {
    token: state.auth.token
  };
});
const getUsers=()=>{
  axios.get(`http://localhost:5000/users/conutOfUsers/`,{ headers: {
    Authorization: `Bearer ${token}`,
  }}).then((result)=>{
    console.log(result.data.result[0].count);
    setUsers(result.data.result[0].count)
  }).catch((err)=>{
    console.log(err);
  })
}

const getProvider=()=>{
  axios.get(`http://localhost:5000/providers/all/count/`).then((result)=>{
    console.log(result.data);
    setProvider(result.data.data[0].numberofproviders)
  }).catch((err)=>{
    console.log(err);
  })
}

const getCategory=()=>{
  axios.get(`http://localhost:5000/categories/countAllCategories`,{ headers: {
    Authorization: `Bearer ${token}`,
  }}).then((result)=>{
    console.log(result.data);
    setCategory(result.data.result[0].count)
  }).catch((err)=>{
    console.log(err);
  })
}
useEffect(()=>{
getUsers()
getProvider()
getCategory()
},[])

  return (
    <div>
      <AdminNavBar/>
      <MDBCard background='primary' className='text-white mb-1 w-25 h-50'>
        <MDBCardHeader>Number of Users</MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            Number of users currently using our app  
          <p>{users}</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='danger' className='text-white mb-1 w-25 h-50'>
        <MDBCardHeader>Number of Providers</MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            Number of providers currently using our app  
          <p>{provider}</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='secondary' className='text-white mb-1 w-25 h-50'>
        <MDBCardHeader>Number of Categories</MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            Number of categories currently in our app  
          <p>{category}</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard background='secondary' className='text-white mb-1 w-25 h-50'>
        <MDBCardHeader>Number of Categories</MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            Number of categories currently in our app  
          <p>{category}</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
    
  )
}

export default Admin