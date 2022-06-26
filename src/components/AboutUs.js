import React from "react";
import { Row, Col, Button } from "react-bootstrap";
const AboutUs = () => {
  return (
    <>
      <a id="about"> </a>
      <Row className="about-us my-5 pt-5">
        <Col xs={12} md={5}>
          <p className="text-secondary h4 text-left mb-3">About Us</p>
          <h2
            className="text-primary display-4 text-left"
            style={{ fontWeight: "700" }}
          >
            Welcome to Deluxe Design
          </h2>
        </Col>
        <Col xs={12} md={7}>
          <p
            className=" h4 text-left mb-4 "
            style={{ lineHeight: "2.3rem", color: "#8B9CB6" }}
          >
            As a multi award winning agency, our creative digital solutions can
            be tailored to your unique requirements, whether you’re looking for
            a comprehensive rebrand, a brand-new mobile app design, or any
            creative print design.
          </p>
          <p
            className=" h5 text-left mb-4 "
            style={{ lineHeight: "2rem", color: "#8B9CB6" }}
          >
            With over 5 years of expertise and a forward-thinking team, we've
            created a very strategic design and web development agency that
            understands the need of its clients. We conduct research & design
            digital experiences to make companies more customer-centric and help
            increase their customer loyalty. Here at Deluxe Design, the team are
            new breed of mastermind, driven to create, be innovative, and
            produce results in the best way possible within an agreed timeframe.
          </p>
          <p
            className=" h5 text-left mb-4 "
            style={{ lineHeight: "2rem", color: "#8B9CB6" }}
          >
            Our Vision: <br /> At Deluxe Design, we are the frontrunner in
            advancing businesses through the digital age. Creative design,
            customer satisfaction, innovation, and teamwork, are the fundamental
            principles behind our company, and persist to reflect on who we are,
            how we work, and what we strive for.
          </p>
          <Row>
            <Button
              variant="outline-secondary"
              size="lg"
              className="ml-3"
              style={{ borderRadius: "999px", padding: "16px 20px" }}
            >
              Start a Project <i className="fas fa-chevron-right"></i>
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;
