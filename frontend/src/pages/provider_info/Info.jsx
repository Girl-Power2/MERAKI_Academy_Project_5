import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';

import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css"
const Info = () => {

  const [bio, setBio] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [msg, setMsg] = useState("");

  const { providerId, token } = useSelector((state) => state.auth);

  const insert_info = (urlFile) => {
    // const obj = ;
    // console.log(urlFile);
    axios
      .post(`http://localhost:5000/provider_info`, {
        bio:bio,
        qualifications:qualifications,
        img: urlFile || "",
        provider_id: providerId,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    const uploadImage = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "g9fkkaot");
        data.append("cloud_name", "drzcyo3sv");
        axios
          .post("https:api.cloudinary.com/v1_1/drzcyo3sv/image/upload", data)
          .then((res) => {
            console.log(data);
            insert_info(res.data.url);
            setUrl(res.data.url);
          })
          .catch((err) => console.log(err));
      };
    return (
      <>
      <div className="input_container">
      <div className="welcome">Welcome to our team . Please fill your information and add your services as the first step of building your account</div>
        <div className="inputs">
        <InputGroup >
<InputGroup.Text
  
>
  Bio
</InputGroup.Text>
<Form.Control as="textarea" aria-label="Bio"  onChange={(e) => {
    setBio(e.target.value);
    
  }}/>
</InputGroup>

<InputGroup>
<InputGroup.Text
 
>
  Qualifications
</InputGroup.Text>
<Form.Control as="textarea" aria-label="Qualifications"  onChange={(e) => {
    setQualifications(e.target.value);
  }} />
</InputGroup>
<Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Insert your image</Form.Label>
        <Form.Control type="file" 
          onChange={(e) => {
            setImage(e.target.files[0]);
          }} />
      </Form.Group>
<Button
as="input"
type="submit"
value="Submit"
onClick={() => {
    console.log(bio);
    console.log(qualifications);
    if (image) {
      uploadImage();
    } else {
        insert_info();
    }}}
/> 
</div></div>
      </>
    );
  };


export default Info;

//     
//
  
