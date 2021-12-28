import { createSlice } from '@reduxjs/toolkit';

const lists = createSlice({
  name: 'lists',
  initialState: {
    lists: [],
    newListFormVisible: false,
    newTodoFormVisible: false,
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
    showNewTodoForm(state) {
      state.newTodoFormVisible = true;
    },
    hideNewTodoForm(state) {
      state.newTodoFormVisible = false;
    },
  },
});

export const {
  setUserLists,
  showNewListForm,
  hideNewListForm,
  showNewTodoForm,
  hideNewTodoForm,
} = lists.actions;

export default lists.reducer;
