import { createSlice } from '@reduxjs/toolkit';

const lists = createSlice({
  name: 'lists',
  initialState: {
    lists: [],
  },
  reducers: {
    setUserLists(state, action) {
      state.lists = action.payload;
    },
  },
});

export const { setUserLists } = lists.actions;

export default lists.reducer;
