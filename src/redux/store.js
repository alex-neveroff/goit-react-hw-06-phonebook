import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

const mainReducer = {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
};

export const store = configureStore({
  reducer: mainReducer,
});
