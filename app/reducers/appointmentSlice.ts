import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../lib/axios";

export interface IAppointmentType {
  area_id?: string | null;
  description?: string | null;
  user_id?: string | null;
  possible_dates?: string[] | null;
}

export interface AppointmentSliceDetails {
  currentStep: number;
  appointments: IAppointmentType[];
  possible_dates?: string[] | null;
  area_id?: string | null;
  description?: string | null;
  user_id?: string | null;
  isLoading: boolean;
  hasDateError: string | null;
  message: string;
}

const initialState: AppointmentSliceDetails = {
  currentStep: 0,
  appointments: [],
  possible_dates: [],
  area_id: null,
  description: null,
  user_id: null,
  isLoading: false,
  hasDateError: null,
  message: "",
};

export const confirmAppointment = createAsyncThunk(
  "Appointment/confirmaAppointment",
  async (appointmentData: IAppointmentType, thunkAPI) => {
    console.log(appointmentData);
    const response = await api.post("/appointments", appointmentData);
    return response.data;
  }
);

export const gettingAppointments = createAsyncThunk(
  "Appointment/gettingAppointment",
  async () => {
    const response = await api.post("/appointments");
    console.log(response);
    // console.log(api.defaults.headers.common["Authorization"]);
    // return response.data;
  }
);

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
  extraReducers(builder) {
    builder.addCase(confirmAppointment.fulfilled, (state, action) => {
      state.message =
        "Pré-agendamento realizado com sucesso! Entraremos em contato";
      console.log(state.message);
    });
    builder.addCase(confirmAppointment.rejected, (state, action) => {
      state.message = "Erro - Tente novamente mais tarde";
      console.error(action.error);
    });
    builder.addCase(gettingAppointments.fulfilled, (state, action) => {
      // state.appointments = action.payload;
      console.log("appointments " + state.appointments);
    });
    builder.addCase(gettingAppointments.rejected, (state, action) => {
      console.error("Error appointments:", action.error);
    });
  },
});

export const { addDetails, deleteDate, addDate, nextStep } =
  appointmentSlice.actions;
