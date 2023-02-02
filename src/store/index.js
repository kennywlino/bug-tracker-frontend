import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import ticketReducer from "./ticketSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    tickets: ticketReducer,
  }
});

export default store;