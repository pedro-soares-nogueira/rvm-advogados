import { configureStore, createSlice } from "@reduxjs/toolkit";

const scheduleSlice = createSlice({
  name: "Schedule",
  initialState: [],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    schedule: scheduleSlice.reducer,
  },
});
