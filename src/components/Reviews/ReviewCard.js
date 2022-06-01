import React from "react";
import { Card } from "react-bootstrap";
const ReviewCard = ({ image, title, review, name, business }) => {
  return (
    <Card className="d-flex mx-auto">
      <Card.Img
        src={`Images/${image}.jpg`}
        className="testimonial-img  mx-auto"
      />
      <Card.Text>
        <Card.Title>{title}</Card.Title>
        {review}
      </Card.Text>
      <div className="footer">
        {" "}
        <span id="name">
          {name}
          <br />
        </span>{" "}
        <span id="position">{business}</span>{" "}
      </div>
    </Card>
  );
};

export default ReviewCard;
