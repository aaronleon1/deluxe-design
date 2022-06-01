import React from "react";
import { ExpertiseCardData } from "./ExpertiseCardData";
import { Row, Col } from "react-bootstrap";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <p
            className="text-center text-primary h1 mt-5"
            style={{ fontWeight: "700" }}
          >
            We Hold Expertise In All <br /> Your Digital needs
          </p>
        </Col>
      </Row>

      <Row className="expertise-row">
        <Col xs={12} md={6}>
          {ExpertiseCardData.slice(0, 3).map((expertise) => {
            return (
              <ExpertiseCard
                key={expertise.id}
                title={expertise.title}
                description={expertise.description}
                icon={expertise.icon}
              />
            );
          })}
        </Col>
        <Col xs={12} md={6}>
          {ExpertiseCardData.slice(3, 6).map((expertise) => {
            return (
              <ExpertiseCard
                key={expertise.id}
                title={expertise.title}
                description={expertise.description}
                icon={expertise.icon}
              />
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default Expertise;
