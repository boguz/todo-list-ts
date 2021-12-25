import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/user.slice.js';
import userSettingsReducer from './slices/userSettings.slice.js';
import viewReducer from './slices/view.slice.js';

const rootReducer = combineReducers({
  user: userReducer,
  userSettings: userSettingsReducer,
  view: viewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
