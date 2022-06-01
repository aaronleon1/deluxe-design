import React from "react";
import { Row, Col, Jumbotron, Button, Form, Image } from "react-bootstrap";
const Hero = () => {
  return (
    <Row className="hero-row my-4">
      <Col xs={12} lg={6} className="my-auto">
        <Jumbotron
          fluid
          className="mb-3 pb-2"
          style={{ background: "#fff", backgroundColor: "#fff" }}
        >
          <h1
            className="display-4 text-left ml-1 text-primary"
            style={{ fontFamily: "Inter" }}
          >
            Give Your Business the{" "}
            <span className="text-secondary" style={{ fontWeight: "400" }}>
              Edge
            </span>{" "}
            It Needs!
          </h1>
          <p className="lead text-left ml-1">
            Everything you need for your online business: Themes, Apps, Assets,
            and More...
          </p>
          <Form className="ml-1">
            <Form.Row>
              <Col xs={10}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    size="lg"
                    placeholder="Enter your email address"
                    style={{
                      paddingTop: "1.8rem",
                      paddingBottom: "1.8rem",
                    }}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Button variant="secondary" size="lg" className="ml-1 px-4 py-2">
                Get Started
              </Button>
            </Form.Row>
          </Form>
        </Jumbotron>
      </Col>
      <Col xs={12} lg={6} className="my-auto">
        <Image src="Images/hero-img.png" fluid />
      </Col>
    </Row>
  );
};

export default Hero;
