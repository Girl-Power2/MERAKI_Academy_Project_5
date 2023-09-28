import React ,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./style.css"
import { MDBSpinner } from 'mdb-react-ui-kit';

const Provider = () => {
    const [provider ,setProvider]=useState([])
const {id}=useParams()
useEffect(()=>{
axios.get(`http://localhost:5000/providers/byCategory/${id}`).then((result)=>{
    console.log(result.data);
    setProvider(result.data.data)
}).catch((err)=>{
    console.log(err);
})
},[])


if(provider.length == 0){
    return <MDBSpinner color='danger'>
     <span className='visually-hidden'>Loading...</span>
   </MDBSpinner>
   }
  return (
    <div >
        <h4>General Medicine</h4>
        <div className='provider'>
        {provider.map((prov,i)=>{
            console.log(prov);
            return (
                <div key={i} >
                    <h5>{prov.fname}{prov.lname}</h5>
                    <h5>{prov.email}</h5>

                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Provider