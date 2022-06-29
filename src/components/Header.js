import React from "react";
import logo from "../assets/photos/Logo/Free Streams.jpg";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
const Header = () => {
  return (
    <div className="nav-bar">
      <Navbar expand="lg">
        <Container fluid>
          <img className="logo" src={logo} alt="Logo" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/tv">TV Shows</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Form className="d-flex">
                <input type="text" placeholder="Search" />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
