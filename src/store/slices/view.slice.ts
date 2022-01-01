import { createSlice } from '@reduxjs/toolkit';

/**
 * Actions and reducers relevant to the app views:
 *  - Set main view
 *  - Set list view
 *  - Start view loading
 *  - End view loading
 */
const view = createSlice({
  name: 'view',
  initialState: {
    viewName: 'main',
    viewListId: null,
    isLoading: false,
  },
  reducers: {
    setViewMain(state) {
      state.viewName = 'main';
      state.viewListId = null;
    },
    setViewList(state, action) {
      state.viewName = 'list';
      state.viewListId = action.payload;
    },
    startViewLoading(state) {
      state.isLoading = true;
    },
    endViewLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { setViewMain, setViewList, startViewLoading, endViewLoading } =
  view.actions;

export default view.reducer;
