import React from "react";
import Title from "./Title";
import img1 from "../../images/room-8.jpeg";
import img2 from "../../images/room-5.jpeg";
import img3 from "../../images/room-6.jpeg";

const FeaturedRooms = () => {
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        <article className="room">
          <div className="img-container">
            <img src={img1} alt="single room" />
            <div className="price-top">
              <h6>$400</h6>
              <p>per night</p>
            </div>
            <a className="btn-primary room-link" href="/rooms/double-deluxe">
              features
            </a>
          </div>
          <p className="room-info">double deluxe</p>
        </article>
        <article className="room">
          <div className="img-container">
            <img src={img2} alt="single room" />
            <div className="price-top">
              <h6>$500</h6>
              <p>per night</p>
            </div>
            <a className="btn-primary room-link" href="/rooms/family-deluxe">
              features
            </a>
          </div>
          <p className="room-info">family deluxe</p>
        </article>
        <article className="room">
          <div className="img-container">
            <img src={img3} alt="single room" />
            <div className="price-top">
              <h6>$600</h6>
              <p>per night</p>
            </div>
            <a
              className="btn-primary room-link"
              href="/rooms/presidential-room"
            >
              features
            </a>
          </div>
          <p className="room-info">presidential</p>
        </article>
      </div>
    </section>
  );
};

export default FeaturedRooms;
