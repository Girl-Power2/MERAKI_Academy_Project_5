import React,{ useEffect } from 'react'
import axios from 'axios'
import { MDBSpinner } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const MyServices = () => {
    const {providerId,token}=useSelector((state)=>{
       return{
        providerId:state.auth.providerId,
        token:state.auth.token
       }
    })
    const [services, setServices] = useState([]);
const getservices=()=>{
    const provider_id=providerId
    // console.log(provider_id);
  axios
    .get(`http://localhost:5000/services/byId/${provider_id}`,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then((result) => {
      // console.log(result.data);
      // dispatchEvent(setServices(result.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
    // const history =useNavigate()
    useEffect(() => {
        getservices()
    }, []);
  

  
  console.log(services);
    return (
        <>
{services? <div className="collection">
        {services?.map((service, i) => {
          return (
            <div key={i} className="container">
              
              <div className="middle">
              <h4>{service.service}</h4>
              </div>
            </div>
          );
        })}
        
      </div>  : <MDBSpinner color='danger'>
    <span className='visually-hidden'>Loading...</span>
  </MDBSpinner>    }
  

      
      </>
    );
}

export default MyServices