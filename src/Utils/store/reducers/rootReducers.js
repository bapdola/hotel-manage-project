import { combineReducers } from "redux";
import listRoomReducer from "./RoomReducer";
import LoginAdmin from "./loginAdminReducer";
import listUserReducer from "./UserReducers";
import HotelReducer from "./HotelReducer";
import listServiceReducer from "./ServiceReducer";

const rootReducer = combineReducers({
  room: listRoomReducer,
  adminLogin: LoginAdmin,
  service: listServiceReducer,
  user: listUserReducer,
  hotel: HotelReducer,
});

export default rootReducer;
