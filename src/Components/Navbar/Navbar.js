import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import navIcon1 from '../../assets/img/linkedinIcon.svg'
import navIcon4 from '../../assets/img/githubIcon.svg'
import resume from '../../assets/img/My Resume.pdf'
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { SiDocusign } from "react-icons/si";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const handleDownload = () => {
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                text: 'Downloaded',
                color: '#fff',
                showConfirmButton: false,
                background: 'transparent',
                timer: 1500
            })
        }, 1000)
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : 'not-scrolled'}>
            <Container>
                <Navbar.Brand href="/">
                    <h1 style={{ color: "#f7f1e3" }}>S.K</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><AiOutlineHome style={{ marginBottom: "2px" }} />Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><AiOutlineUser style={{ marginBottom: "2px" }} />About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><CgFileDocument style={{ marginBottom: "2px" }} />Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sourav-kumar-bb46b2196/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="linkedin" /></a>
                            <a href="https://github.com/Sourav-Kumar-bit/" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="" /></a>
                        </div>
                        <a href="#connect"><button className="conn"><span>H!re Me</span></button></a>
                        <a href={resume} onClick={handleDownload} download><button className="cv"><span><SiDocusign />CV</span></button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}