import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const GetInTouch = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <p className="text-center h1 text-primary mt-5 mb-3 mb-sm-2">
            Get In Touch
          </p>
        </Col>
      </Row>
      <Row className="mt-5 mb-3">
        <Col xs={12} md={6} lg={{ span: 4, offset: 2 }}>
          <p className="text-left h4">Los Angeles, California</p>
          <p className="text-left" style={{ fontWeight: "600" }}>
            <i className="far fa-envelope text-secondary"></i>:
            hello@deluxedesign.com
          </p>
          <p className="text-left" style={{ fontWeight: "600" }}>
            <i className="fas fa-phone text-secondary"></i>: 213-555-0184
          </p>
          <p className="text-left" style={{ fontWeight: "600" }}>
            <i className="far fa-map text-secondary"></i>: USA
          </p>
        </Col>

        <Col xs={12} md={6} lg={{ span: 4, offset: 1 }}>
          <p className="text-left h4">New York, New York</p>
          <p className="text-left" style={{ fontWeight: "600" }}>
            <i className="far fa-envelope text-secondary"></i>:
            hello@deluxedesign.com
          </p>
          <p className="text-left" style={{ fontWeight: "600" }}>
            <i className="fas fa-phone text-secondary"></i>: 212-555-0182
          </p>
          <p className="text-left" style={{ fontWeight: "600" }}>
            <i className="far fa-map text-secondary"></i>: USA
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouch;
