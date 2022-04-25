import { combineReducers } from "redux";
import listRoomReducer from "./RoomReducer";
import listBookRoomReducer from "./BookRoomReducer";
import LoginAdmin from "./loginAdminReducer";
import listUserReducer from "./UserReducers";
import HotelReducer from "./HotelReducer";
import BookingReducer from "./BookingReducer";
import listServiceReducer from "./ServiceReducer";

const rootReducer = combineReducers({
  bookroom:listBookRoomReducer,
  room: listRoomReducer,
  adminLogin: LoginAdmin,
  service: listServiceReducer,
  user: listUserReducer,
  hotel: HotelReducer,
  booking: BookingReducer,
});

export default rootReducer;
