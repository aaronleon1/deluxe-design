import React from "react";
import { Row, Col, Image } from "react-bootstrap";
const OurPromise = () => {
  return (
    <Row className="our-promise my-5">
      <Col xs={12} md={6} className="my-auto">
        <Image fluid src="Images/team.jpg" style={{ borderRadius: "8px" }} />
      </Col>
      <Col xs={12} md={6}>
        <p className="text-left h2 text-primary" style={{ fontWeight: "600" }}>
          Our Promises
        </p>
        <p
          className="text-left"
          style={{
            color: "#8B9CB6",
            lineHeight: "2rem",
            fontSize: "1.3rem",
            fontWeight: "500",
          }}
        >
          Our designers and developers help you build innovative digital
          solutions and applications and allow you to deliver captivating user
          experiences across all channels.
        </p>
        <p className="text-left">
          <i className="fas fa-check-circle" style={{ color: "#6b70fd" }}></i>{" "}
          Visual Design and Branding
        </p>
        <p className="text-left">
          <i className="fas fa-check-circle" style={{ color: "#6b70fd" }}></i>{" "}
          Graphics Detailing
        </p>
        <p className="text-left">
          <i className="fas fa-check-circle" style={{ color: "#6b70fd" }}></i>{" "}
          Prototyping
        </p>
        <p className="text-left">
          <i className="fas fa-check-circle" style={{ color: "#6b70fd" }}></i>{" "}
          Review and Validation
        </p>
        <p className="text-left">
          <i className="fas fa-check-circle" style={{ color: "#6b70fd" }}></i>{" "}
          User Acceptance
        </p>
        <p className="text-left">
          <i className="fas fa-check-circle" style={{ color: "#6b70fd" }}></i>{" "}
          Launch the Project
        </p>
        <p className="text-left" style={{ color: "#8B9CB6" }}>
          We take our years of experience and apply them to create truly
          innovative digital solutions for clients across different sectors.
        </p>
      </Col>
    </Row>
  );
};

export default OurPromise;
