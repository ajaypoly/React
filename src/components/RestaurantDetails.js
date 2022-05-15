import React, { useState, useEffect } from "react";
import { Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function RestaurantDetails() {
  const [data, setData] = useState([]);
  const params = useParams([]);
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      await fetch("/restaurants.json")
        .then((res) => res.json())
        .then((data) => setData(data.restaurants));
    };
    fetchData();
  }, []);
  const details = data.find((i) => i.id == id);
  return (
    <>
      <Link className="back-btn" to="/">
        Back To Home
      </Link>
      {details ? (
        <div className="details">
          <Row className="my-3 p-2">
            <Col md={3}>
              <Image
                className="img"
                src={details.photograph}
                alt={details.name}
              />
            </Col>
            <Col md={4}>
              <ListGroup.Item className= "p-3">
                <h2> {details.name}</h2>
                <p>{details.neighborhood}</p>
              </ListGroup.Item>
              <ListGroup.Item className = "my">
                <p>Cuisine{details.cuisine_type}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Address{details.address}</p>
              </ListGroup.Item>
            </Col>
            <Col md ={4} >
            <ListGroup.Item>
                <h4>Operating Hours</h4>
                <p>Monday{details.operating_hours.Monday}</p>
                <p>Tuesday{details.operating_hours.Tuesday}</p>
                <p>Wednesday{details.operating_hours.Wednesday}</p>
                <p>Thursday{details.operating_hours.Thursday}</p>
                <p>Friday{details.operating_hours.Friday}</p>
                <p>Saturday{details.operating_hours.Saturday}</p>

              </ListGroup.Item>
            </Col>
          </Row>
        </div>
      ) : null}
    </>
  );
}

export default RestaurantDetails;
