import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/images/react.jpg";

const Room = () => {
  return (
    <>
  <div className="roomslist-center"></div>
      <article className="room">
        <div className="img-container">
          <img src={defaultImg} alt="single room" />
          <div className="price-top">
            <h6>$5000</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/single-room`} className="btn-primary room-link">
            features
          </Link>
        </div>
        <p className="room-info">Phong</p>
      </article>
    </>
  );
};

export default Room;
