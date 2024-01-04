import { combineReducers } from "redux";
import userReducer from "./reducers/userSlice";
import downloadReducer from "./reducers/downloadSlice";

const rootReducer = combineReducers({
    user: userReducer,
    download: downloadReducer
  });

  export default rootReducer;