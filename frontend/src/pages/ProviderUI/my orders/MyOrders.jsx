import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useSelector} from 'react-redux'
const MyOrders = () => {
    const[orders,setOrders]=useState([])
const{providerId}=useSelector(state=>{
    return{
        providerId:state.auth.providerId  
    }
    
})
const{token}=useSelector(state=>{
   return{
    token:state.auth.token
   } 
}
    
)
useEffect(()=>{
axios.get(`http://localhost:5000/orders/provider/${providerId}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((result)=>{
    console.log(result.data);
  })
  .catch((err)=>{
    console.log(err);
  })
},[orders])
  return (
    <div>MyOrders</div>
  )
}

export default MyOrders