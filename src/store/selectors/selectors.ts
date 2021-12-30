import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer.js';

export const isLoading = createSelector(
  (state: RootState) => state,
  (state: RootState) => state.view.isLoading || state.lists.isLoading
);
