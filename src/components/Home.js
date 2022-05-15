import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Restaurants from "./Restaurants";

function Home() {
  const [hotels, sethotels] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      await fetch("/restaurants.json")
        .then((res) => res.json())
        .then((data) => sethotels(data.restaurants));
    };
    fetchdata();
  }, []);

  console.log("our data", hotels);

  return (
    <>
      <Row>
        {hotels
          ? hotels.map((item) => (
              <Col sm={12} md={8} lg={6} xl={3}>
                <Restaurants item={item} />
              </Col>
            ))
          : "error"}
      </Row>
    </>
  );
}

export default Home;
