import React from "react";
import { BenefitCardData } from "./BenefitCardData";
import { Row, Col, Button } from "react-bootstrap";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <Row className="my-5">
      <Col xs={12} lg={6} className="my-5">
        <Row className=" mb-md-1 mb-xs-0">
          {BenefitCardData.slice(0, 2).map((benefit) => {
            return (
              <Col xs={12} md={6} key={benefit.title}>
                <BenefitCard
                  title={benefit.title}
                  icon={benefit.icon}
                  description={benefit.description}
                />
              </Col>
            );
          })}
        </Row>
        <Row className="mt-xs-3 mt-md-5">
          {BenefitCardData.slice(2, 4).map((benefit) => {
            return (
              <Col xs={12} md={6} key={benefit.title}>
                <BenefitCard
                  title={benefit.title}
                  icon={benefit.icon}
                  description={benefit.description}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col xs={12} lg={6} className="my-auto">
        <p className="text-left h1 text-primary" style={{ fontWeight: "600" }}>
          Some Of The Benefits Of Working With Us
        </p>
        <p
          className=" text-left mb-4 benefits"
          style={{
            color: "#8B9CB6",
            lineHeight: "2rem",
            fontSize: "1.3rem",
            fontWeight: "500",
          }}
        >
          Deluxe Design has a strong reputation as being one of the best web
          design agencies in the marketing industry… and that’s good news for
          you.
        </p>
        <p
          className=" text-left mb-4 benefits"
          style={{
            color: "#8B9CB6",
            lineHeight: "2rem",
            fontSize: "1.3rem",
            fontWeight: "500",
          }}
        >
          Our highly skilled team of marketers, designers, developers, and brand
          experts know exactly what it takes to ensure your website grabs your
          visitor’s attention, ensuring success for your online business.
        </p>
        <Row>
          <Button
            variant="outline-secondary"
            size="lg"
            className="ml-3 benefits-button"
          >
            Get In Touch <i className="fas fa-chevron-right"></i>
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default Benefits;
