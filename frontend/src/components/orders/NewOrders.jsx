import React ,{useEffect ,useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { MDBSpinner } from "mdb-react-ui-kit";
import order, {setOrder} from "../../service/redux/reducers/order"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
const NewOrders = () => {
const dispatch =useDispatch()
const { token } = useSelector((state) => {
  return {
    token: state.auth.token,
  };
});
const {orders}=useSelector((state)=>{
  return{
    orders:state.orders.orders
  }
})
  useEffect(()=>{
    axios.get(`http://localhost:5000/orders/`,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
  }).then((result)=>{
    console.log(result.data);
dispatch(setOrder(result.data.result))
  }).catch((err)=>{
    console.log(err);
  })
  },[])

  if(orders.length ===0){
    return (
      <MDBSpinner color="danger">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    )
  }
  return (
   <div> 
    <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>
   
     <MDBRow className="justify-content-center align-items-center h-75 w-100">
       <MDBCol>
         <p>
           <span className="h2">Shopping Cart </span>
           <span className="h4">(1 item in your cart)</span>
         </p>

         <MDBCard className="mb-4">
           <MDBCardBody className="p-4">
             <MDBRow className="align-items-center">
               
               <MDBCol md="3" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Name</p>
                   <p className="lead fw-normal mb-0">iPad Air</p>
                 </div>
               </MDBCol>
               <MDBCol md="3" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Color</p>
                   <p className="lead fw-normal mb-0">
                     <MDBIcon
                       fas
                       icon="circle me-2"
                       style={{ color: "#fdd8d2" }}
                     />
                     pink rose
                   </p>
                 </div>
               </MDBCol>
               <MDBCol md="2" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Quantity</p>
                   <p className="lead fw-normal mb-0">1</p>
                 </div>
               </MDBCol>
               <MDBCol md="2" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Price</p>
                   <p className="lead fw-normal mb-0">$799</p>
                 </div>
               </MDBCol>
               <MDBCol md="2" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Total</p>
                   <p className="lead fw-normal mb-0">$799</p>
                 </div>
               </MDBCol>
             </MDBRow>
           </MDBCardBody>
         </MDBCard>

         <MDBCard className="mb-5">
           <MDBCardBody className="p-4">
             <div className="float-end">
               <p className="mb-0 me-5 d-flex align-items-center">
                 <span className="small text-muted me-2">Order total:</span>
                 <span className="lead fw-normal">$799</span>
               </p>
             </div>
           </MDBCardBody>
         </MDBCard>

         <div className="d-flex justify-content-end">
           <MDBBtn color="light" size="lg" className="me-2">
             Continue shopping
           </MDBBtn>
           <MDBBtn size="lg">Add to cart</MDBBtn>
         </div>
       </MDBCol>
     </MDBRow>

 </section></div>
  )
}

export default NewOrders