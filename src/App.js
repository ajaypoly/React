import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantDetails from "./components/RestaurantDetails";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
