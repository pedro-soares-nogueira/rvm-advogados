import { createSlice } from "@reduxjs/toolkit";

export interface IAppointmentType {
  // area_id?: string | null;
  // description?: string | null;
  // user_id?: string | null;
  // possible_dates?: string | null;
}

export interface AppointmentSliceDetails {
  possible_dates?: string | null;
  area_id?: string | null;
  description?: string | null;
  user_id?: string | null;
  isLoading: boolean;
}

const initialState: AppointmentSliceDetails = {
  possible_dates: null,
  area_id: null,
  description: null,
  user_id: null,
  isLoading: true,
};

export const appointmentSlice = createSlice({
  name: "Appointment",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.area_id = action.payload.area_id;
      state.description = action.payload.description;
      state.user_id = action.payload.user_id;

      console.log(state.area_id, state.description, state.user_id);
    },
    addDate: (state, action) => {
      state.possible_dates = action.payload;
      console.log(state, action.payload);
    },
    addDescription: (state, action) => {
      console.log();
    },
  },
});

export const { addDetails, addDate, addDescription } = appointmentSlice.actions;
