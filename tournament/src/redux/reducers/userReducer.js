
const userReducer = (
  state = { userData: {}, emailSent: false },
  action
) => {
  switch (action.type) {
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        emailSent: true
      };
    case "REGISTER_USER_ERROR":
      return state;

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        userData: action.userData,
        isLoggedIn: true,
        error: null,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
      };
    case "CONFIRM_USER_SUCCESS":
      return {
        ...state
      }
    default:
      return state;
  }
};

export default userReducer;
