import React from "react";
import emailjs from "emailjs-com"
import Swal from 'sweetalert2';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrMsg] = useState('')
  const [status, setStatus] = useState(false);

  const onFormUpdate = (category, value) => {

    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      setButtonText("Send");
    }, 2000)

    setTimeout(() => {
      setSuccessMsg("");
      setErrMsg("")
    }, 2000)

    emailjs.sendForm('service_2l2wlke', 'template_o976pmc', e.target, 'QPfJziPRbjXJo4kK5')
      .then((result) => {
        console.log(result.text);
        setStatus(true);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thanks for Contacting',
          color: '#fff',
          background: 'transparent',
          showConfirmButton: false,
          timer: 2000
        })
        setSuccessMsg("Message sent successfully!")
      }, (error) => {
        console.log(error.text);
        setStatus(false);
        Swal.fire({
          icon: 'error',
          title: "Something went Wrong",
          text: "Try again later...",
          color: '#fff',
          background: 'transparent',
          showConfirmButton: false,
          timer: 2000
        });
        setErrMsg("Something went Wrong")
      });

    setButtonText("Sending...");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect" style={{ borderTop: "2px solid #0652C5", borderRadius: "20px" }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} title="Please enter first name" placeholder="First Name" name="firstName " required onClick={() => { setSuccessMsg('') }} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} title="Please enter last name" placeholder="Last Name" name="lastName" required onClick={() => { setSuccessMsg('') }} onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} title="Please enter valid email" placeholder="Email Address" name="email" required onClick={() => { setSuccessMsg('') }} onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} title="Please enter phone" placeholder="Phone No." name="phone" required onClick={() => { setSuccessMsg('') }} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" name="message" required onClick={() => { setSuccessMsg('') }} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      </Col>

                    </Row>
                    <Row>
                      <Col>
                        <button type="submit"><span>{buttonText}</span></button><span><p>
                          <br />
                          {status ? <p className="text text-success">{successMsg}</p> : <p className="text text-danger">{errorMsg}</p>}
                        </p></span>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
