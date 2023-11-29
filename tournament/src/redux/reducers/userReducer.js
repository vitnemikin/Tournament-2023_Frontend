const userReducer = (
  state = { userData: {name: 'Alan', last_name: 'Altindis', email: 'altindisalan@gmail.com', country: 'KZ',  isLoggedIn: false }, error: null },
  action
) => {
  switch (action.type) {
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        userData: action.userData,
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
