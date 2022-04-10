import React, { useEffect, useState } from "react";

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

  console.log("our data",hotels);

  return <div>


  </div>;
}

export default Home;
