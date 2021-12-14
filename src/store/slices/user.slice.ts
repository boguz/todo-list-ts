import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  displayName: string;
  avatarURL: string;
}

const initialState: User | null = null;

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<User>) {
      const newUser: User = {
        id: action.payload.id,
        displayName: action.payload.displayName,
        avatarURL: action.payload.avatarURL,
      };
      // @ts-ignore
      state = newUser;
    },
    logoutUser(state) {
      // eslint-disable-next-line  @typescript-eslint/no-unused-vars
      state = null;
    },
  },
});

export const { loginUser, logoutUser } = user.actions;

export default user.reducer;
