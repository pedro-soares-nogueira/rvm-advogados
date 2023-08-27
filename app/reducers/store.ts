import { configureStore } from "@reduxjs/toolkit";
import { scheduleSlice } from "./scheduleSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { fetchDetailsSlice } from "./fetchSlice";

export const store = configureStore({
  reducer: {
    schedule: scheduleSlice.reducer,
    fetcher: fetchDetailsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
