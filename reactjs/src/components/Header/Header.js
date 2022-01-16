import React from "react";
import './Header.css';
// import {Link} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="">Stock Track</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider  />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Button className='login-button' href='/login'>Sign In</Button>
            <Button className='login-button'>Sign Up</Button>
        </Navbar>
    );
};