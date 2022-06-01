import React from "react";
import { Card } from "react-bootstrap";
const BenefitCard = ({ title, icon, description }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <i
            className={icon}
            style={{ fontSize: "4rem", color: "#233d63" }}
          ></i>
          <br />
          {title}
        </Card.Title>
        <Card.Text className="text-left" style={{ fontWeight: "500" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BenefitCard;
