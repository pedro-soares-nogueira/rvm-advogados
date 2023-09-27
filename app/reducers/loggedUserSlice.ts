import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../lib/axios";

export interface User {
  id?: number;
  uranus_id?: string;
  name?: string;
  email?: string;
  phone?: string;
  document?: string;
  player_id?: string;
  is_client?: number;
  list_process?: number;
  api_token?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export interface LoggedUser {
  user: User | null;
}

const initialState: LoggedUser = {
  user: null,
};

export const loadUser = createAsyncThunk("User/fetchUser", async () => {
  const { data } = await api.get("/user");
  return data;
});

export const loggedUserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserNull: (state) => {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      console.error("Rejected with error:", action.error);
    });
  },
});

export const { setUserNull } = loggedUserSlice.actions;
