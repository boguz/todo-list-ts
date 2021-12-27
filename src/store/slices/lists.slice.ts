import { createSlice } from '@reduxjs/toolkit';

const lists = createSlice({
  name: 'lists',
  initialState: {
    lists: [],
    newListFormVisible: false,
  },
  reducers: {
    setUserLists(state, action) {
      state.lists = action.payload;
    },
    showNewListForm(state) {
      state.newListFormVisible = true;
    },
    hideNewListForm(state) {
      state.newListFormVisible = false;
    },
  },
});

export const { setUserLists, showNewListForm, hideNewListForm } = lists.actions;

export default lists.reducer;
