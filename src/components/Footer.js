import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Footer(props) {
  let year = new Date().getFullYear();
  return (
    <div>
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

export default Footer;
