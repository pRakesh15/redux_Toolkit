import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './slice/userDetails'
export const store = configureStore({
  reducer: {
    user:userReducer,
  },
});

