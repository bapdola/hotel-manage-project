import React from "react";
import Room from "./Room";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchData } from "src/Utils/store/action/roomAction";

export default function RoomList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.room.rooms);

  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  return (
    <>
      {/* <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div> */}
      <section className="roomslist">
        <div className="roomslist-center">
          {data &&
            data.map((item) => {
              return <Room name={item.name} key={item.id} />;
            })}
        </div>
      </section>
      );
    </>
  );
}
