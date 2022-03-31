import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";
import img1 from "../../images/room-8.jpeg";

const Room = () => {
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={img1} alt="single room" />
        <div className="price-top">
          <h6>$5000</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">single room</p>
    </article>
  );
};

export default Room;
