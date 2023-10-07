import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css"
import { MDBSpinner,MDBBtn } from 'mdb-react-ui-kit';

const Categories = () => {
  const [search ,setSearch]=useState("")
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
       {/* <form className="d-flex input-group w-auto"> */}

              <input
           type="text"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
onChange={(e)=>{
  setSearch(e.target.value)
}}
              />
              
              <button  color="primary" onClick={()=>{
                console.log(search);
                axios.get(`http://localhost:5000/providers/byName/?fname=${search}`).then((result)=>{
                  console.log(result.data);
                }).catch((err)=>{
                  console.log(err);
                })
              }} >
                Search
              </button>
            {/* </form> */}
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
