import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiVisualstudio,
} from "react-icons/di";
import {
    SiExpress,
    SiRedux,
    SiAngular,
    SiJupyter,
    SiPostman,
    SiCanva,
    SiEclipseide,
} from "react-icons/si";

export default function Skills() {
    return (
        <Container fluid className="skill-section" id="skills"  style={{borderTop: "2px solid #0652C5", borderRadius: "20px 20px 0px 0px"}}>
            <Particle />
            <Container >
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong> I Own
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML/')}>
                        <DiHtml5 />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS/')}>
                        <DiCss3 />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript/')}>
                        <DiJavascript1 />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://reactjs.org/docs/getting-started.html/')}>
                        <DiReact />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://redux.js.org/')}>
                        <SiRedux />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://docs.github.com/en')}>
                        <DiGit />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.mongodb.com/docs/')}>
                        <DiMongodb />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://nodejs.org/en/docs/')}>
                        <DiNodejs />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://expressjs.com/')}>
                        <SiExpress />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://angular.io/')}>
                        <SiAngular />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <h1 className="project-heading">
                        <strong className="purple">Tools </strong>I Use
                    </h1>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://code.visualstudio.com/docs/')}>
                        <DiVisualstudio />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://jupyter-notebook.readthedocs.io/en/stable/')}>
                        <SiJupyter />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://learning.postman.com/docs/getting-started/introduction/')}>
                        <SiPostman />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://docs.developer.canva.com/apps/')}>
                        <SiCanva />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.eclipse.org/documentation/')}>
                        <SiEclipseide />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}