import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/user.slice.js';
import userSettingsReducer from './slices/userSettings.slice.js';
import viewReducer from './slices/view.slice.js';
import listsReducer from './slices/lists.slice.js';

const rootReducer = combineReducers({
  user: userReducer,
  userSettings: userSettingsReducer,
  view: viewReducer,
  lists: listsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
