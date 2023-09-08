import { configureStore } from "@reduxjs/toolkit";
import { appointmentSlice } from "./appointmentSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { fetchDetailsSlice } from "./fetchSlice";
import { loggedUserSlice } from "./loggedUserSlice";

export const store = configureStore({
  reducer: {
    Appointment: appointmentSlice.reducer,
    fetcher: fetchDetailsSlice.reducer,
    user: loggedUserSlice.reducer,
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
