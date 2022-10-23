import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../assets/img/AvatarMaker.svg"
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";

export default function Banner1() {
    return (
        <Container fluid className="banner1" id="about" style={{ borderTop: "2px solid #0652C5", borderRadius: "20px 20px 0px 0px" }}>
            <Container>
                <Row className="about">
                    <Col xs={12} md={7} xl={9} className="home-about-description">
                        <div>
                            <h1 style={{ fontSize: "2.6em", marginTop: "100px" }}>
                                LET ME <span className="purple"> INTRODUCE </span> MYSELF
                            </h1>
                            <p className="home-about-body">
                                Hi Everyone, I am <b className="purple">Sourav Kumar</b> from <b className="purple">Jharkhand, India.</b><br />
                                I am a 2020 IMSC passout in Applied Mathematics from Central University of Jharkhand,<br /> currently working as a <b className="purple">Fullstack Developer</b> at <b className="purple">Infosys Ltd.</b>
                                <br />
                                <br />I am proficient in programming languages like
                                <i>
                                    <b className="purple"> Java, Javascript and Python. </b>
                                </i>
                                <br />
                                <br />
                                My Interest's lie in latest
                                <i>
                                    <b className="purple"> Web Technologies, Machine Learning and AI.</b>
                                </i>
                                <br />
                                <br />
                                <br />
                                Apart from working, I also love doing !
                            </p>
                            <ul>
                                <li className="about-activity">
                                    <ImPointRight /> Playing Video Games
                                </li>
                                <li className="about-activity">
                                    <ImPointRight /> Reading Manga
                                </li>
                                <li className="about-activity">
                                    <ImPointRight /> Cooking
                                </li>
                            </ul>
                            <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
                                "Love what you believe in and believe in what you love "{" "}<br />
                                <span>-Sourav Kumar</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={5} xl={3} className="myAvtar">
                        <Tilt>
                            <img src={avatar} className="img-fluid" alt="avatar" style={{ marginTop: "70px" }} />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}