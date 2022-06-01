import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
const YourProject = () => {
  return (
    <Row className="lets-talk my-5 py-5 ">
      <Col
        xs={{ span: 12, order: 2 }}
        md={{ span: 12, order: 1 }}
        lg={{ span: 3, offset: 3 }}
      >
        <p className="text-left h1 mb-5" style={{ color: "#fff" }}>
          Let’s Talk About Your Project.
        </p>
        <p
          className="text-left h5 mb-5"
          style={{ color: "#fff", lineHeight: "1.8rem" }}
        >
          No matter where your business currently stands in the marketplace,
          Deluxe Design offers a full suite of services that will take your
          business to the next level and help reach your goals.
        </p>
        <Row>
          <Button variant="outline-light" size="lg" className="ml-3 mb-5">
            Let's Talk <i className="fas fa-chevron-right"></i>
          </Button>
        </Row>
      </Col>
      <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 2 }} lg={3}>
        <Image
          fluid
          src="Images/letsTalk.jpg"
          style={{ borderRadius: "8px" }}
        />
      </Col>
    </Row>
  );
};

export default YourProject;
