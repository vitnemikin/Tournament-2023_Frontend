import { configureStore } from "@reduxjs/toolkit";
import { downloadReducer } from "../reducers/downloadSlice";
import userReducer from "../reducers/userSlice";


export const store = configureStore({
    reducer: {
      donwload: downloadReducer,
      user: userReducer
    }
  })


  export type RootState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch