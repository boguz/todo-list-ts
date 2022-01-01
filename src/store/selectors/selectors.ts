import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer.js';

/**
 * Get "computed isLoading" state according to the loading state of each component
 */
export const isLoading = createSelector(
  (state: RootState) => state,
  (state: RootState) => state.view.isLoading || state.lists.isLoading
);
