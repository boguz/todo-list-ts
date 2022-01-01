import { createSlice } from '@reduxjs/toolkit';

/**
 * Actions and Reducers relevant to the user settings:
 *  - Show user settings
 *  - Hide user settings
 */
const userSettings = createSlice({
  name: 'user',
  initialState: {
    visible: false,
  },
  reducers: {
    showUserSettings(state) {
      state.visible = true;
    },
    hideUserSettings(state) {
      state.visible = false;
    },
  },
});

export const { showUserSettings, hideUserSettings } = userSettings.actions;

export default userSettings.reducer;
