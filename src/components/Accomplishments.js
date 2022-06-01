import React from "react";
import { Row, Col } from "react-bootstrap";

const Accomplishments = () => {
  return (
    <>
      <Row className="my-5">
        <Col xs={12}>
          <p
            className="text-center text-primary h1 mt-5"
            style={{ fontWeight: "700" }}
          >
            We Have Successfully Completed <br /> Over 500 Projects
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4}>
          <p className="text-secondary text-center h1">500+</p>
          <p className="text-primary text-center h3">Projects Completed</p>
        </Col>
        <Col xs={12} md={4}>
          <p className="text-secondary text-center h1">490+</p>
          <p className="text-primary text-center h3">Positive Reviews</p>
        </Col>
        <Col xs={12} md={4}>
          <p className="text-secondary text-center h1">400+</p>
          <p className="text-primary text-center h3">Customers Worldwide</p>
        </Col>
      </Row>
    </>
  );
};

export default Accomplishments;
