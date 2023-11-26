import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import downloadReducer from "./reducers/downloadReducer";

const rootReducer = combineReducers({
    user: userReducer,
    download: downloadReducer
  });

  export default rootReducer;