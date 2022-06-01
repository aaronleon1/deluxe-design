import React from "react";
import { Card } from "react-bootstrap";
const ExpertiseCard = ({ title, icon, description }) => {
  return (
    <Card border="secondary" className="my-5">
      <Card.Body>
        <Card.Title style={{ fontSize: "4rem" }}>
          <i className={`${icon} text-primary`}></i>
        </Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExpertiseCard;
