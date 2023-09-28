import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';

import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
const Info = () => {
//   console.log("info");
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
      <div>INfo</div>
        <InputGroup>
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

<label className="insert">
Insert your image
<input
  type="file"
  className="insert"
  onChange={(e) => {
    // console.log(e.target.value);
    setImage(e.target.files[0]);
  }}
/>
</label>
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
      </>
    );
  };


export default Info;

//     
//
  
