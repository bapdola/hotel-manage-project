import { combineReducers } from "redux";
import listRoomReducer from "./RoomReducer";
import listUserReducer from "./UserReducer";
import LoginAdmin from "./loginAdminReducer";
import UsersReducer from "./UserReducers";
import HotelReducer from "./HotelReducer";

const rootReducer = combineReducers({
  room: listRoomReducer,
  adminLogin: LoginAdmin,
  service: listServiceReducer,
  user: UsersReducer,
  hotel: HotelReducer,
});

export default rootReducer;
