import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { MDBInput, MDBCheckbox, MDBContainer } from "mdb-react-ui-kit";


const ContactUs = () => {
    const [messg, setMessg] = useState("");
   
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
  
    
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
      //duha
        .sendForm(
          "service_aesfl0b",
          "template_lz0dgna",
          form.current,
          "AeudsNtPdl-qTBqqj"
        )
        //duha
        //hala
        // emailjs
        // .sendForm(
        //   "service_j5381wl",
        //   "template_nm6s4nf",
        //   form.current,
        //   "OvNxWqM4ZNoMso80y"
        // )
        //hala
        .then(
          (result) => {
            console.log("SUCCESS!", result, result.text);
            setMessg("SUCCESS!");
            setSuccess(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setMessg("FAILED...");
            setSuccess(false);
          }
        );
    };
  
    return (
        <div className="formContact">
   
        <form ref={form} onSubmit={sendEmail} className="contact">
          <MDBInput
            id="form4Example1"
            className="w-100"
            wrapperClass="mb-4"
            type="text"
            name="user_name"
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <MDBInput
            type="email"
            id="form4Example2"
            name="user_email"
            wrapperClass="mb-4"
            label="Email address"
            className="w-100"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <MDBInput
            wrapperClass="mb-4"
            name="message"
            textarea
            id="form4Example3"
            rows={4}
            label="Message"
            className="w-100"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
  
          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form4Example4"
            label="Send me a copy of this message"
            defaultChecked
          />
         
  
          <MDBInput
            type="submit"
            value="Send"
            className="send w-25"
           
          />
        </form>
      </div>
    );
  };
  
  export default ContactUs;