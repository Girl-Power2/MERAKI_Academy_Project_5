import React ,{useEffect ,useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { MDBSpinner } from "mdb-react-ui-kit";
import {setOrder,updateOrder} from "../../service/redux/reducers/order"
import { NavLink } from 'react-router-dom';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
MDBModal,
MDBModalBody,
MDBModalContent,
MDBModalDialog,
MDBModalFooter,
MDBModalHeader,
MDBModalTitle,
MDBTypography,
MDBTableHead,
MDBTable
} from "mdb-react-ui-kit";


const NewOrders = () => {
  const history =useNavigate()
const dispatch =useDispatch()
const [today ,setToday]=useState("")
const [basicModal, setBasicModal] = useState(false);
const toggleShow = () => setBasicModal(!basicModal)
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
setToday(result.data.result[0].date.toString().split('T')[0])
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
   <div > 
    <section className="vh-75" style={{ backgroundColor: "#eee" }}>
   
     <MDBRow className="justify-content-center align-items-center h-75 w-100" >
       <MDBCol>
         <p>
           <span className="h2">Orders</span>
         </p>
         <MDBTable>
         <MDBTableHead>
        <tr>
          <th scope='col' ><NavLink to="/previousOrder">previous order</NavLink></th>
          <th scope='col' > <NavLink to="/orders">current order</NavLink>
          
          </th>
        
        </tr>
      </MDBTableHead>
      </MDBTable>
{orders&&orders.map((item ,i)=>{
  return(<div key={i+1}  style={{ backgroundColor: "#eee" }}>

 
         <MDBCard className="mb-4" >
           <MDBCardBody className="p-4">
             <MDBRow className="align-items-center" >
               
               <MDBCol md="2" className="d-flex justify-content-center" >
                 <div>
                   <p className="small text-muted mb-4 pb-2">Name</p>
                   <p className="lead fw-normal mb-0">{item.fname} {item.lname}</p>
                 </div>
               </MDBCol>
               <MDBCol md="1" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Service</p>
                   <p className="lead fw-normal mb-0">
                     <MDBIcon
                       fas
                       icon="circle me-2"
                       style={{ color: "#eee" }}
                     />
                     {item.service}
                   </p>
                 </div>
               </MDBCol>
               <MDBCol md="2" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Time</p>
                   <p className="lead fw-normal mb-0">{item.time_from}-{item.time_to}</p>
                 </div>
               </MDBCol>
               <MDBCol md="2" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Date</p>
                   <p className="lead fw-normal mb-0">{today}</p>
                 </div>
               </MDBCol> 
               
               <MDBCol md="2" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">Phone Number</p>
                   <p className="lead fw-normal mb-0">{item.phonenumber}</p>
                 </div>
               </MDBCol>
               <MDBCol md="2" className="d-flex justify-content-center">
                 <div>
                   <p className="small text-muted mb-4 pb-2">price_per_hour</p>
                   <p className="lead fw-normal mb-0">{item.price_per_hour}JD</p>
                 </div>
               </MDBCol>
               <MDBCol md="2" className="d-flex justify-content-center">
                 <div>
                 <MDBBtn onClick={()=>{
                  toggleShow()
//                 axios.put(`http://localhost:5000/orders/`,{id:item.order_id},{ headers: {
//                   Authorization: `Bearer ${token}`,
//                 }}).then((result)=>{
//                   console.log(result.data);
// dispatch(updateOrder({order_id:result.data.result.order_id ,status:result.data.result.state}))
//                 }).catch((err)=>{
//                   console.log(err);
//                 })
              }}>Checkout ?</MDBBtn>
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="text-start text-black p-4">
                      <MDBTypography
                        tag="h5"
                        className="modal-title text-uppercase mb-5"
                        id="exampleModalLabel"
                      >
                        {item.firstname} {item.lastname}
                      </MDBTypography>
                      <MDBTypography
                        tag="h4"
                        className="mb-5"
                        style={{ color: "#35558a" }}
                      >
                        Thanks for your order
                      </MDBTypography>
                      <p className="mb-0" style={{ color: "#35558a" }}>
                        Payment summary
                      </p>
                      <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />
                      <div className="d-flex justify-content-between">
                      <p className="small mb-0">Your Address:</p>
                      <p className="small mb-0">{item.adress}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="small mb-0">Your Phone Number :</p>
                      <p className="small mb-0">{item.phonenumber}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="small mb-0">Your Email:</p>
                      <p className="small mb-0">{item.email}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="small mb-0">Your Country:</p>
                      <p className="small mb-0">{item.city}</p>
                    </div>
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold mb-0">Ether Chair(Qty:1)</p>
                        <p className="text-muted mb-0">$1750.00</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="small mb-0">Shipping</p>
                        <p className="small mb-0">$175.00</p>
                      </div>

                      <div className="d-flex justify-content-between pb-1">
                        <p className="small">Tax</p>
                        <p className="small">$200.00</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold" style={{ color: "#35558a" }}>
                          $2125.00
                        </p>
                      </div>
                    </MDBModalBody>

                    <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                      <MDBBtn
                        size="lg"
                        style={{ backgroundColor: "#35558a" }}
                        className="mb-1"
                      >
                        Track your order
                      </MDBBtn>
                    </MDBModalFooter>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
                 </div>
               </MDBCol>
               
             
  
  </MDBRow>
            
             
           
         
           </MDBCardBody>
         </MDBCard>
</div>)
})}

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