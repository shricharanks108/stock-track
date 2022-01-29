import React from "react";
import './Header.css';
// import {Link} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";

export const Header = (props) => {
    console.log(props.cartItems)
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="">Stock Track</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="#link">Link</Nav.Link>
                        <Nav.Link as={NavLink} to="/product-listings">Listings </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/cart">
                    <div id="shoppingCartDiv">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="100%" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <p>{Object.keys(props.cartItems).length}</p>
                    </div>
                </Nav.Link>
            </Nav>

            <Button className='login-button'>Sign In</Button>
            <Button className='login-button'>Sign Up</Button>
        </Navbar>
    );
};