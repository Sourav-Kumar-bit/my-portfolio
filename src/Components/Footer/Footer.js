import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../../assets/img/linkedinIcon.svg'
import navIcon4 from '../../assets/img/githubIcon.svg'

export default function Footer() {
  return (
    <footer className="footer" style={{ border: "2px solid #0652DD", borderRadius: "10px 10px 10px 10px" }}>
      <Container>
        <Row className="align-items-center" style={{display:"flex", justifyContent: "space-between", padding: "20px"}}>
          <Col size={12} md={5} sm={6} style={{alignItems: "center"}}>
            <a href="/#" className="footer-logo" style={{ textDecoration: "none"}}>
              <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S.K</h1>
            </a>
            <p>Designed and Developed by<br /><b style={{ marginLeft: "40px" }}>Sourav Kumar</b></p>
          </Col>
          <Col size={12} md={3} sm={6} className="text-center text-sm-end">
            <div className="social-icon footer-social-icon">
              <a href="https://www.linkedin.com/in/sourav-kumar-bb46b2196/" target="_blank" rel="noopener noreferrer" className="footer-icon-linkedIn"><img src={navIcon1} alt="Icon" /></a>&nbsp;&nbsp;
              <a href="https://github.com/Sourav-Kumar-bit/" target="_blank" rel="noopener noreferrer" className="footer-icon-github"><img src={navIcon4} alt="Icon" /></a>&nbsp;
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}