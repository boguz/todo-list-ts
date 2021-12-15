import { createSlice } from '@reduxjs/toolkit';
// import { UserInterface } from "../../types.js";

const user = createSlice({
  name: 'user',
  initialState: {
    id: null,
    displayName: null,
    avatarURL: null,
  },
  reducers: {
    loginUser(state, action) {
      state.id = action.payload.id;
      state.displayName = action.payload.displayName;
      state.avatarURL = action.payload.avatarURL;
    },
    logoutUser(state) {
      state.id = null;
      state.displayName = null;
      state.avatarURL = null;
    },
  },
});

export const { loginUser, logoutUser } = user.actions;

export default user.reducer;
