import React ,{useEffect, useState}from 'react'
import AdminNavBar from './AdminNavBar'
import { useSelector, useDispatch } from "react-redux";
import { NavLink,Outlet } from 'react-router-dom';

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import axios from 'axios';
import "./style.css"
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
    <>
   <AdminNavBar/>
    <div className='Admincontainer'>
      <div className='aside'>
      <aside >
        <hr/>
    <NavLink to="addCategory">Add category</NavLink>
    <hr/>
    <NavLink to="providerAndOrders">Provider And Order</NavLink>
    <hr/>
    <NavLink to="analytics">analytics</NavLink>



    </aside>
    </div>
   <Outlet/>
    </div>
           
   </> 
  )
}

export default Admin