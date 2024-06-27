import { createSlice } from "@reduxjs/toolkit";

interface UserState {}

/** The initial state for the authentication slice of the Redux store. */
const initialState: UserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
