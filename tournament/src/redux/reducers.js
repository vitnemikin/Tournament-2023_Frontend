import { combineReducers } from "redux";

const rootReducer = combineReducers({
    book: bookReducer,
    library: libraryReducer,
    user: userReducer
  });

  export default rootReducer;