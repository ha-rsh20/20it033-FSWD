import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

export default function NavBar() {
  let year = new Date().getFullYear();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Student Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/addStudent">Add Student</Nav.Link>
              <Nav.Link href="/getStudent">Get Student Information</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container className="text-center">
          <Col lg={12} className="text-center text-light">
            {year} - All Rights are Reserved!!!
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
