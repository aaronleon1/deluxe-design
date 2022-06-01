import React from "react";
import { Card } from "react-bootstrap";

const TeamCard = ({ image, name, title }) => {
  return (
    <Card className="d-flex mx-auto">
      <Card.Img src={`Images/${image}.jpg`} className="team-img  mx-auto" />
      <Card.Text>
        <Card.Title>{name}</Card.Title>
        {title}
      </Card.Text>
    </Card>
  );
};

export default TeamCard;
