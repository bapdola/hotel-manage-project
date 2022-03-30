import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

const Room = () => {
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src="../../images/room-1.jpeg" alt="single room" />
        <div className="price-top">
          <h6>$5000</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">Phong</p>
    </article>
  );
};

export default Room;
