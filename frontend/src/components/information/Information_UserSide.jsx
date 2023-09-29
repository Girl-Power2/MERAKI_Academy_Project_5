import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { MDBSpinner } from 'mdb-react-ui-kit';
import "./style.css"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBContainer
  } from 'mdb-react-ui-kit';


 export default function Information_UserSide(){
    const [info, setInfo] = useState([])
    const { token} = useSelector((state) => {
        return {
          token: state.auth.token,
         };
      });
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/provider_info/${id}`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((result)=>{
            console.log(result.data.result);
            setInfo(result.data.result)
          }).catch((err)=>{
            console.log(err);
          })
    },[])
    if(info.length==0){
        return <MDBSpinner color='danger'>
         <span className='visually-hidden'>Loading...</span>
       </MDBSpinner>
       }
  return (
    <div >
        {info.map((data ,i)=>{
            return (
                <div className='data' >
                     <MDBCard style={{ maxWidth: '560px' }} className='card-height 100'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={data.img}  height={250} width={250} alt='...' className='h-100 w-100' />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Name : {data.fname} {data.lname}</MDBCardTitle>
            <MDBCardText>
             Bio: {data.bio}
            </MDBCardText>
            <MDBCardText>
            Qualifications: {data.qualifications}
            </MDBCardText>
            <MDBCardText>
            BrithDate: {data.birthdate}
            </MDBCardText>
            <MDBCardText>
            City :{data.city}
            </MDBCardText>
            <MDBCardText>
            Gender : {data.gender}
            </MDBCardText>
            <MDBCardText>
            PhoneNumber : {data.phonenumber}
            </MDBCardText>
            <MDBCardText>
            Email : {data.email}
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
                </div>
            )
        })}


    </div>
  )
}

// export default Information_UserSide