import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <h1>luxurious rooms</h1>
      <div />
      <p>deluxe rooms starting at $299</p>
      <Link to="/rooms" className="btn-primary">
        our rooms
      </Link>
    </div>
  );
};

export default Banner;
