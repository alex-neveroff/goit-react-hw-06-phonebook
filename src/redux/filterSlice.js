import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterReducer(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterReducer } = filterSlice.actions;
