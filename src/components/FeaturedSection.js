import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const FeaturedSection = () => {
  return (
    <>
      <p className="text-center ml-1 mt-1">Recently featured on:</p>

      <Row className="featured-row mb-5 ml-1 ">
        <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 4 }}>
          <Image src="Images/wapoLogo.png" fluid />
        </Col>
        <Col xs={3} md={2}>
          <Image src="Images/NYTLogo.png" fluid />
        </Col>
      </Row>
    </>
  );
};

export default FeaturedSection;
