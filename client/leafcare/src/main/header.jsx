import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OffcanvasNavbar from './sidebar';
import logo from '../assets/logo-leafcare-removebg.png'
import { motion, useSpring, useScroll } from "motion/react"
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import './header.css';
import Button from 'react-bootstrap/Button';
import Float_header from './float-header';
function header() {
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= screenHeight / 10) {
                setTriggerAnimation(true);
            } else if (window.scrollY < screenHeight / 25) {
                setTriggerAnimation(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" fixed='top'>
                    <Row>
                        <motion.div
                            initial={{ y: 0 }}
                            animate={triggerAnimation ? { y: screenHeight * -1.1 } : { y: -1 * screenHeight / 10 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            style={{
                                position: "fixed",
                                zIndex: 10
                            }}
                        >
                            <Container fluid className='header' id="float-header"
                                style={{
                                    background: "linear-gradient(to right, #2f9e44, #b2f2bb)",
                                    height: "100vh", width: "100vw", display: "flex", placeItems: "center", justifyContent: "center"
                                }}>
                                    <Float_header />
                                <Button variant="success" style={{ bottom: "10px", position: "absolute" }} onClick={() => { setTriggerAnimation(true) }}>Scroll Up</Button>
                            </Container>
                        </motion.div>
                    </Row>
                    <Container fluid><Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{ }
                        LeafCare
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <OffcanvasNavbar expand={expand} />
                    </Container>
                </Navbar>
            ))}

        </>
    )
}
export default header