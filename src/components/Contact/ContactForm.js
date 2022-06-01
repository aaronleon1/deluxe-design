import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
const ContactForm = () => {
  return (
    <Container fluid>
      <Row className="cta-form">
        <Col
          xs={12}
          md={{ span: 5, offset: 2 }}
          lg={{ span: 4, offset: 3 }}
          style={{ background: "#fff" }}
          className="my-xs-0 my-md-3"
        >
          <Form>
            <p className="text-left h2 py-3">Contact Us</p>
            <Row>
              <Col>
                <Form.Control placeholder="Name" className="py-4" />
              </Col>
              <Col>
                <Form.Control placeholder="Email" className="py-4" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control placeholder="Phone Number" className="py-4" />
              </Col>
              <Col>
                <Form.Control placeholder="Company" className="py-4" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  className="pb-5 mt-4 mb-2"
                  style={{ borderTop: "0" }}
                />
              </Col>
            </Row>
            <Row>
              <Button
                variant="outline-secondary"
                size="lg"
                className="ml-3 px-4 py-2 my-2"
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
        <Col
          xs={12}
          md={4}
          lg={2}
          style={{ background: "#6b70fd" }}
          className="my-xs-0 my-md-3"
        >
          <Row className="mt-2">
            <Col className="mt-xs-0 mt-md-5">
              <p
                className="mt-2 text-left text-white"
                style={{ fontWeight: "600" }}
              >
                <i className="fas fa-phone text-white"></i>: 213-555-0184
              </p>
              <p className="text-left text-white" style={{ fontWeight: "600" }}>
                <i className="far fa-envelope text-white"></i>:
                hello@deluxedesign.com
              </p>
              <p className="text-left text-white" style={{ fontWeight: "600" }}>
                <i className="far fa-map text-white"></i>: New York, NY
              </p>
              <p className="text-left text-white">
                <i className="fab fa-facebook" style={{ fontSize: "2rem" }}></i>{" "}
                <i
                  className="fab fa-twitter-square"
                  style={{ fontSize: "2rem" }}
                ></i>{" "}
                <i
                  className="fab fa-instagram-square"
                  style={{ fontSize: "2rem" }}
                ></i>{" "}
                <i className="fab fa-linkedin" style={{ fontSize: "2rem" }}></i>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
