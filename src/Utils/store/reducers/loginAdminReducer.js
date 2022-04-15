const initialState = {
  currentUser: null,
};

export default function LoginAdmin(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_ADMIN":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}
