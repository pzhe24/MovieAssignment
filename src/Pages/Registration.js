import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

const Registration = () => {
  return (
    <div>
      <Header />
      <div className="register-form">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-6">
              <Form>
                <h5>
                  <b>
                    <u>Registration</u>
                  </b>
                </h5>
                <Form.Group className="mb-1">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <Form.Group>
                  <Button className="mt-2" type="submit">
                    <b>Register</b>
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
