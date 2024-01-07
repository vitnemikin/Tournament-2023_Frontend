import { configureStore } from "@reduxjs/toolkit";
import { downloadReducer } from "../reducers/downloadSlice.ts";
import userReducer from "../reducers/userSlice.ts";


 const store = configureStore({
    reducer: {
      donwload: downloadReducer,
      user: userReducer
    }
  })


  export default store;

  export type RootState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch