import React from "react";
import Room from "./Room";
import defaultImg from "../../assets/images/react.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchDataRoom } from "src/Utils/store/action/roomAction";

export default function RoomList() {
  const res = useSelector((state) => state.room.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchDataRoom());
  }, [dispatch]);

  return (
    <>
      <div className="empty-search">
        <h2>The List room</h2>
      </div>
      <section className="roomslist">
        <div className="roomslist-center">
          {res.map((item, index) => {
            <article className="room" key={index}>
              <div className="img-container">
                <img src={defaultImg} alt="single room" />
                <div className="price-top">
                  <h6>{item.price}</h6>
                  <p>per night</p>
                </div>
                <Link
                  to={`/rooms/single-room`}
                  className="btn-primary room-link"
                >
                  features
                </Link>
              </div>
              <p className="room-info">{item.name}</p>
            </article>;
          })}
          <Room />
        </div>
      </section>
    </>
  );
}
