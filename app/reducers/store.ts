import { configureStore, createSlice } from "@reduxjs/toolkit";
import { scheduleSlice } from "./scheduleSlice";

export const store = configureStore({
  reducer: {
    schedule: scheduleSlice.reducer,
  },
});
