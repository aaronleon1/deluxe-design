import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    const retrievedReviews = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      retrievedReviews.push(data);
    });
    setReviews(retrievedReviews);
  };
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <Row className="mt-5">
        <Col xs={12}>
          <p
            className="text-center text-primary h1 mb-5"
            style={{ fontWeight: "700" }}
          >
            What Our Clients Think
          </p>
        </Col>
      </Row>
      <Row>
        {reviews &&
          reviews.map((review, id) => {
            return (
              // Multiple people could have the same name, will add index in this case.
              <Col md={4} className="py-0 px-2" key={review.name + id}>
                <ReviewCard
                  image={review.image}
                  title={review.title}
                  business={review.business}
                  name={review.name}
                  review={review.review}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Reviews;
