import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Container fluid style={{ background: "#f8f9fa" }}>
      <Row className="deluxe-footer">
        <Col xs={12} md={{ span: 4, offset: 2 }} className="my-md-5">
          <p className="text-left h1 text-primary">Deluxe Design</p>
        </Col>
        <Col xs={12} md={{ span: 4, offset: 2 }} className="my-md-5">
          <p className="text-primary text-left pt-2">
            <i
              className="fab fa-facebook mr-1"
              style={{ fontSize: "2rem" }}
            ></i>
            <i
              className="fab fa-twitter-square mr-1"
              style={{ fontSize: "2rem" }}
            ></i>
            <i
              className="fab fa-instagram-square mr-1"
              style={{ fontSize: "2rem" }}
            ></i>
            <i className="fab fa-linkedin" style={{ fontSize: "2rem" }}></i>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ span: 2, offset: 2 }}>
          <p className="text-left text-primary h4">Quick Links</p>
          <p className="text-left text-muted mt-3">Home</p>
          <p className="text-left text-muted">About Us</p>
          <p className="text-left text-muted">Services</p>
          <p className="text-left text-muted">Blog</p>
          <p className="text-left text-muted">Portfolio</p>
          <p className="text-left text-muted">Testimonials</p>
          <p className="text-left text-muted">Work With Us</p>
          <p className="text-left text-muted">Site Map</p>
        </Col>
        <Col xs={12} md={2}>
          <p className="text-left text-primary h4">Services</p>
          <p className="text-left text-muted mt-3">Landing Page Design</p>
          <p className="text-left text-muted">UI/UX Design</p>
          <p className="text-left text-muted">Website Design</p>
          <p className="text-left text-muted">Identity and Branding</p>
          <p className="text-left text-muted">Wordpress Development</p>
          <p className="text-left text-muted">Mobile App Development</p>
        </Col>
        <Col xs={12} md={2} lg={2}>
          <p className="text-left text-primary h4">Company</p>
          <p className="text-left text-muted mt-3">Benefits</p>
          <p className="text-left text-muted">Services</p>
          <p className="text-left text-muted">Portfolio</p>
          <p className="text-left text-muted">Contact Us</p>
          <p className="text-left text-muted">Privacy Policy</p>
          <p className="text-left text-muted">Terms & Conditions</p>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <p className="text-left text-primary h4">Get In Touch</p>
          <p
            className="mt-2 text-left text-muted mt-3"
            style={{ fontWeight: "600", fontSize: "0.8rem" }}
          >
            <i className="fas fa-phone text-muted"></i>: 213-555-0184
          </p>
          <p
            className="text-left text-muted"
            style={{ fontWeight: "600", fontSize: "0.8rem" }}
          >
            <i className="far fa-envelope text-muted"></i>:
            hello@deluxedesign.com
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 2 }}>
          <p
            className="text-left text-primary mt-5"
            style={{ fontWeight: "600" }}
          >
            Copyright © 2021 DeluxeDesign. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
