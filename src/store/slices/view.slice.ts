import { createSlice } from '@reduxjs/toolkit';

const view = createSlice({
  name: 'view',
  initialState: {
    viewName: 'list',
    viewTodoId: null,
  },
  reducers: {
    setViewList(state) {
      state.viewName = 'list';
      state.viewTodoId = null;
    },
  },
});

export const { setViewList } = view.actions;

export default view.reducer;
