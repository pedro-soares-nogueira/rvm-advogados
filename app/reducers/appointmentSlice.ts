import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, apiUranus } from "../lib/axios";

export interface IAppointmentType {
  CpfCnpj: string | null;
  IdProfissional: number | null;
  Turno: string | null;
  IdArea: number | null;
  // area_id?: number | null;
  // description?: string | null;
  // user_id?: string | null;
  // possible_dates?: string[] | null;
}

export interface AppointmentSliceDetails {
  currentStep: number;
  appointments: IAppointmentType[];
  possible_dates?: string[] | null;
  area_id?: number | null;
  description?: string | null;
  user_id?: string | null;
  isLoading: boolean;
  hasDateError: string | null;
  message: string[];
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
  message: [],
};

export const confirmAppointment = createAsyncThunk(
  "Appointment/confirmaAppointment",
  async (appointmentData: IAppointmentType, thunkAPI) => {
    const response = await apiUranus.post(
      "/preagendamento?token=7bd15381-52b3-47b0-bdce-7ead4be7654a",
      {
        CpfCnpj: appointmentData.CpfCnpj,
        IdArea: appointmentData.IdArea,
        IdProfissional: appointmentData.IdProfissional,
        Turno: appointmentData.Turno,
      }
    );

    console.log(response);

    return response.data;
  }
);

export const gettingAppointments = createAsyncThunk(
  "Appointment/gettingAppointment",
  async () => {
    const response = await api.post("/appointments");
    // console.log(response);
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
      console.log(action);
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
      state.message = [
        "Pré-agendamento realizado com sucesso! Entraremos em contato",
        "Sucesso",
      ];
      // console.log(state.message);
    });
    builder.addCase(confirmAppointment.rejected, (state, action) => {
      state.message = ["Erro - Tente novamente mais tarde", "Error"];
      console.error(action.error);
    });
    builder.addCase(gettingAppointments.fulfilled, (state, action) => {
      // state.appointments = action.payload;
      // console.log("appointments " + state.appointments);
    });
    builder.addCase(gettingAppointments.rejected, (state, action) => {
      console.error("Error appointments:", action.error);
    });
  },
});

export const { addDetails, deleteDate, addDate, nextStep } =
  appointmentSlice.actions;
