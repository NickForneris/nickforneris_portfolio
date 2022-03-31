import React, { useState } from 'react';
import { Nav, Navbar, Col, Row, Container, Button, Modal } from 'react-bootstrap';


const Navigation = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="xl" className='color-nav p-2' fixed='top' variant='dark'>
           
                    <Navbar.Brand href="#home">NF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#references">References</Nav.Link>
                            {/* <Button variant="outline-light w-25" onClick={handleShow}>Contact</Button> */}
                        </Nav>
                    </Navbar.Collapse>

            </Navbar>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>Get In Touch!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='contact'>
                <a href="https://www.linkedin.com/in/nickforneris/" className='aContact'><i className="bi bi-linkedin m-5"/></a>
                <a href="https://github.com/NickForneris" className='aContact'><i className="bi bi-github m-5"/></a>
                <a href="https://twitter.com/Nick_Forneris" className='aContact'><i className="bi bi-twitter m-5"/></a>
                <a href="mailto:nichoolasdforneris@gmail.com" className='aContact'><i className="bi bi-mailbox m-5"/></a>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default Navigation