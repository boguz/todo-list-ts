import { createSlice } from '@reduxjs/toolkit';

const lists = createSlice({
  name: 'lists',
  initialState: {
    lists: [],
    newListFormVisible: false,
    newTodoFormVisible: false,
    isLoading: false,
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
    hideAllFormOverlays(state) {
      state.newListFormVisible = false;
      state.newTodoFormVisible = false;
    },
    startListsLoading(state) {
      state.isLoading = true;
    },
    endListsLoading(state) {
      state.isLoading = false;
    },
  },
});

export const {
  setUserLists,
  showNewListForm,
  hideNewListForm,
  showNewTodoForm,
  hideNewTodoForm,
  hideAllFormOverlays,
  startListsLoading,
  endListsLoading,
} = lists.actions;

export default lists.reducer;
