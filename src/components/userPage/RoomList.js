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

  console.log(data);
  return (
    <>
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
<<<<<<< HEAD
      <section className="roomslist">
        <div className="roomslist-center">
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
        </div>
      </section>
      );
    </>
  );
=======
    <section className="roomslist">
      <div className="roomslist-center">
      <Room  />
      <Room  />
      <Room  />
      <Room  />
      <Room  />
      <Room  />

      </div>
    </section>
  
    </>

);
>>>>>>> 39132f8fd8ca2c94c8eca6825613bd257c69c030
}
