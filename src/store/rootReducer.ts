import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/user.slice.js';

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
