import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../lib/axios";
import { storageAuthTokenRemove } from "../storage/storageAuthToken";

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
  // console.log("try");
  // console.log(api.defaults.headers.common["Authorization"]);
  const { data } = await api.get("/user");
  console.log(data);
  return data;
});

export const loggedUserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.user = action.payload;
      // console.log(`payload ${action.payload}`);
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      console.error("Rejected with error:", action.error);
    });
  },
});

/* 

{
    "": 5,
    "": null,
    "": "Pedro1",
    "": "pedro3@gmail.com",
    "": "(99) 99999-9992",
    "": "12345678902",
    "": null,
    "": 1,
    "": 0,
    "": "pWfRC9fNvtKb9hXYUKmwfepuzyodsdENYYLWi1q3FcEh0gbHAEk37bIUMQcC",
    "": "2023-08-31T12:36:12.000000Z",
    "": "2023-09-06T16:36:44.000000Z",
    "": null
}

*/
