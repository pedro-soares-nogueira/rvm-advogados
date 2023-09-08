import { createSlice } from "@reduxjs/toolkit";

export interface IAppointmentType {
  // area_id?: string | null;
  // description?: string | null;
  // user_id?: string | null;
  // possible_dates?: string | null;
}

export interface AppointmentSliceDetails {
  currentStep: number;
  possible_dates?: string[] | null;
  area_id?: string | null;
  description?: string | null;
  user_id?: string | null;
  isLoading: boolean;
  hasDateError: string | null;
}

const initialState: AppointmentSliceDetails = {
  currentStep: 0,
  possible_dates: [],
  area_id: null,
  description: null,
  user_id: null,
  isLoading: false,
  hasDateError: null,
};

export const appointmentSlice = createSlice({
  name: "Appointment",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      state.currentStep = action.payload;
    },
    addDetails: (state, action) => {
      state.area_id = action.payload.area_id;
      state.description = action.payload.description;
      state.user_id = action.payload.user_id;

      console.log(state.area_id, typeof state.description, state.user_id);
    },
    addDate: (state, action) => {
      const payloadDate = action.payload;

      const alreadyExists = state.possible_dates.some(
        (hasDate) => hasDate === payloadDate
      );

      if (!alreadyExists) {
        state.possible_dates = [...state.possible_dates, payloadDate];
      } else {
        throw new Error();
      }
    },
    deleteDate: (state, action) => {
      const dataToDelete = state.possible_dates.filter(
        (data) => data !== action.payload
      );
      return {
        ...state,
        possible_dates: dataToDelete,
      };
    },
  },
});

export const { addDetails, deleteDate, addDate, nextStep } =
  appointmentSlice.actions;
