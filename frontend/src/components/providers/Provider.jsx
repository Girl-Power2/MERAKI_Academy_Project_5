import React ,{useEffect,useState} from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./style.css"
import { MDBSpinner } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
;
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
const Provider = () => {
    const [provider ,setProvider]=useState([])
    const [loder, setLoder] = useState(false)
    const history =useNavigate()
    const { token, isLoggedIn} = useSelector((state) => {
        return {
          token: state.auth.token,
          isLoggedIn: state.auth.isLoggedIn,
          
        };
      });
const {id}=useParams()
useEffect(()=>{
axios.get(`http://localhost:5000/provider_info/category/${id}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((result)=>{
    console.log(result.data.result);
    setProvider([...provider,...result.data.result])
    setLoder(true)
}).catch((err)=>{
    console.log(err);
})
},[])


if(!loder){
    return <MDBSpinner color='danger'>
     <span className='visually-hidden'>Loading...</span>
   </MDBSpinner>
   }
  return (
    <div >
        <h4 className='title'>General Medicine</h4>
        <div className='provider'>
        {provider.map((prov,i)=>{
            console.log(prov);
            return (
                <div key={i} >
                    <MDBCard className='card'>
      <MDBCardImage src={prov.img} height={250} width={250}  position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Name : {prov.fname} {prov.lname}</MDBCardTitle>
        <MDBCardText>
          Category :{prov.category}
        </MDBCardText>
        <MDBBtn  onClick={()=>{
            history(`/provider_Information/${prov.provider_id}`)
        }}>MORE INFO</MDBBtn>
      </MDBCardBody>
    </MDBCard>
                   
                    

                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Provider