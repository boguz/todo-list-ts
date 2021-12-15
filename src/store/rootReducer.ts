import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/user.slice.js';
import userSettingsReducer from './slices/userSettings.slice.js';

const rootReducer = combineReducers({
  user: userReducer,
  userSettings: userSettingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
