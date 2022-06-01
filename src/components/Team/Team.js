import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import TeamCard from "./TeamCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const getTeamMembers = async () => {
    const querySnapshot = await getDocs(collection(db, "team"));
    const retrievedMembers = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      retrievedMembers.push(data);
    });
    setTeamMembers(retrievedMembers);
  };
  useEffect(() => {
    getTeamMembers();
  }, []);
  return (
    <>
      <Row>
        <Col xs={12}>
          <p className="text-center h1 text-primary mt-5 mb-3 mb-sm-2">
            Meet the Team
          </p>
        </Col>
      </Row>
      <Row className="team my-md-5 mb-xs-0">
        {teamMembers &&
          teamMembers.slice(0, 3).map((member, id) => {
            return (
              // Multiple team members could have the same name, add ID in this case.
              <Col xs={12} md={4} key={member.name + id}>
                <TeamCard
                  image={member.image}
                  title={member.title}
                  name={member.name}
                />
              </Col>
            );
          })}
      </Row>
      <Row>
        {teamMembers &&
          teamMembers.slice(3, 6).map((member) => {
            return (
              <Col xs={12} md={4} key={member.name}>
                <TeamCard
                  image={member.image}
                  title={member.title}
                  name={member.name}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Team;
