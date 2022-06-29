import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="login-form">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-12 col-sm-9 col-lg-4">
              <Form>
                <h4>
                  <b>
                    <u>Login</u>
                  </b>
                </h4>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <br />
                  <a href="#!">Forgot your password?</a>
                </Form.Group>
                <Form.Group>
                  <Button type="submit">
                    <b>Login</b>
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

export default Login;
