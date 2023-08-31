import { createSlice } from "@reduxjs/toolkit";

export interface IAppointmentType {
  areaOfExpertise?: string;
  howCanWeHelp?: string;
  professional?: string;
  possibleDates?: string;
  obs?: string;

  // area_id?: string | null;
  // description?: string | null;
  // user_id?: string | null;
  // possible_dates?: string | null;
}

export interface AppointmentSliceDetails {
  appointment: IAppointmentType | null;
  isLoading: boolean;
}

const initialState: AppointmentSliceDetails = {
  appointment: null,
  isLoading: true,
};

export const appointmentSlice = createSlice({
  name: "Appointment",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addDetails } = appointmentSlice.actions;
