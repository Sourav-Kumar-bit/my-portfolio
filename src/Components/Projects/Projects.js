import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../../assets/img/robot.png";
import projImg2 from "../../assets/img/frontend.png";
import projImg3 from "../../assets/img/dual.png";
import projImg4 from "../../assets/img/web design.jpg";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Project() {

    const projects = [
        {
            title: "Data Science Projects",
            description: "EDA & Prediction",
            imgUrl: projImg1,
        },
        {
            title: "Frontend Projects",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "ReactJs Projects",
            description: "Design & Development",
            imgUrl: projImg3,
        }
    ];

    const projects1 = [
        {
            title: "Angular Projects",
            description: "Design & Development",
            imgUrl: projImg4,
        }
    ];
    const openProject = () => {
        window.open("https://github.com/Sourav-Kumar-bit?tab=repositories/")
    }
    return (
        <section className="project" id="projects" style={{ borderTop: "2px solid #0652C5", borderRadius: "20px 20px 0px 0px" }}>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>

                            <div>
                                <h1><strong className="purple">Projects</strong> I Did</h1>
                                <p>The below projects are all my personal work and not copied from anywhere. Feel free to use these for your personal work.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" >
                                        <Tab.Pane className="projectScreen" eventKey="first">
                                            <Row onClick={openProject} >
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project} />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane className="projectScreen" eventKey="second">
                                            <Row onClick={openProject} >
                                                {
                                                    projects1.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project} />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane className="projectScreen" eventKey="third">
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <p>To be updated...</p>
                                            <br />
                                            <br />
                                            <br />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='imag'></img>
        </section>
    )
}