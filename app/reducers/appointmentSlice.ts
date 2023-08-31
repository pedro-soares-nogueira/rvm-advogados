import { createSlice } from "@reduxjs/toolkit";

export interface IAppointmentType {
  areaOfExpertise?: string;
  howCanWeHelp?: string;
  professional?: string;
  possibleDates?: string;
  obs?: string;
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
