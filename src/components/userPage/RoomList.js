import React from "react";
import defaultImg from "../../assets/images/react.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BtnBookings from "./btnBooking";
import {
  FetchDataRoom,
  FetchDataTypeRoom,
} from "src/Utils/store/action/roomAction";

export default function RoomList() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.room.rooms);
  console.log(data);

  useEffect(() => {
    dispatch(FetchDataRoom());
    dispatch(FetchDataTypeRoom());
  }, [dispatch]);

  const dataType = useSelector((state) => state.room.typeRoom);

  const dataSort = data.sort(function (a, b) {
    return a.status - b.status;
  });
 

  return (
    <>
      <section className="roomslist">
        <div className="roomslist-center">
          {dataSort &&
            dataSort.map((item) => {
              return (
                <div key={item.id}>
                  <article className="room"  >
                    <div className="img-container">
                      <img src={defaultImg} alt="single room" />
                      <div className="price-top">
                        {dataType.map((type) => {
                          return (
                            <div key={type.id}>
                              <h2>
                                {type.id == item.roomTypeId ? type.type : []}
                              </h2>
                              <h3 className="mt-2"></h3>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {" "}
                        <BtnBookings
                          id={item.id}
                          name={item.name}
                          status={item.status}
                          typeRoom={item.roomTypeId}
                        />
                      </div>
                    </div>
                    <div>
                      {item.status === 1 ? (
                        <h4 className="room-info">{item.name}</h4>
                      ) : (
                        <h4 className="room-infox"> {item.name}</h4>
                      )}
                    </div>
                    {/* <h6 >{item.name}</h6> */}
                  </article>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
