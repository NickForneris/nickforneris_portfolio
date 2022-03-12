import React, { useState } from 'react';
import { Nav, NavDropdown, Navbar, Container, Offcanvas, Form, FormControl, Button, NavLink } from 'react-bootstrap';

const Navigation = () => {

    return (
        <Navbar expand="lg" className='color-nav sticky-top' variant='dark'>
            <Container fluid>
                <Navbar.Brand href="#">NF</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton className='offcanvas-color text-white'>
                            <Offcanvas.Title id="offcanvasNavbarLabel">NF</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='offcanvas-color'>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation