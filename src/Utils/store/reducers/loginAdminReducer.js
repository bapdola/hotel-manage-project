import * as a from "../../constant";
import { toast } from "react-toastify";

const initialState = {
  currentUser: null,
  error: false,
};

export default function LoginAdmin(state = initialState, action) {
  switch (action.type) {
    case a.LOGIN_ADMIN:
      return { ...state, error: false, currentUser: action.payload };
    case a.LOGOUT_ADMIN:
      return { ...state, currentUser: null };
    case "LOGIN_ADMIN_FAILED":
      return {
        ...state,
        error: true,
        currentUser: null,
      };
    default:
      return state;
  }
}
