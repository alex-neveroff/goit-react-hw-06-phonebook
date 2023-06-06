import { createSlice } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [].sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    ),
    filter: '',
    filteredContacts: null,
  },
  reducers: {
    addReducer(state, action) {
      state.contacts = [...state.contacts, action.payload].sort(
        (firstContact, secondContact) =>
          firstContact.name.localeCompare(secondContact.name)
      );
    },
    deleteReducer(state, action) {
      state.contacts = state.contacts.filter(contact => {
        return contact.id !== action.payload;
      });
    },
    filterReducer(state, action) {
      state.filter = action.payload;
      state.filteredContacts = state.contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(state.filter.toLowerCase())
        )
        .sort((firstContact, secondContact) =>
          firstContact.name.localeCompare(secondContact.name)
        );
    },
  },
});

export const { addReducer, deleteReducer, filterReducer } =
  phonebookSlice.actions;
