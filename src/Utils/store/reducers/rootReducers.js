import { combineReducers } from "redux";
import listRoomReducer from "./RoomReducer";
import listServiceReducer from "./ServiceReducer";
import LoginAdmin from "./loginAdminReducer";
import UsersReducer from "./UserReducers";
import HotelReducer from "./HotelReducer";
import BookingReducer from "./BookingReducer";

const rootReducer = combineReducers({
  room: listRoomReducer,
  adminLogin: LoginAdmin,
  service: listServiceReducer,
  user: UsersReducer,
  hotel: HotelReducer,
  booking: BookingReducer,
});

export default rootReducer;
