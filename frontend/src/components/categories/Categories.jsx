import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"
import { MDBSpinner } from 'mdb-react-ui-kit';

const Categories = () => {
  const [category, setCategory] = useState([]);
  const history =useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:5000/categories/`)
      .then((result) => {
        console.log(result.data.data);
        setCategory(result.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

if(category.length == 0){
 return <MDBSpinner color='danger'>
  <span className='visually-hidden'>Loading...</span>
</MDBSpinner>
}


  return (
    <div className="collection">
      {category.map((categ, i) => {
        return (
          <div key={i} className="container">
            <img className="image" src={categ.img} height={250} width={250} onClick={()=>{
              history(`/provider/${categ.category_id}`)
            }} />
            <div className="middle">
            <h4>{categ.category}</h4>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Categories;
