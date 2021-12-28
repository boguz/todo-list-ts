import { createSlice } from '@reduxjs/toolkit';

const view = createSlice({
  name: 'view',
  initialState: {
    viewName: 'main',
    viewListId: null,
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
  },
});

export const { setViewMain, setViewList } = view.actions;

export default view.reducer;
