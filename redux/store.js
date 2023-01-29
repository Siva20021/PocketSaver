import { configureStore } from "@reduxjs/toolkit";
import billSlice from "./billSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    bill: billSlice,
  },
});
