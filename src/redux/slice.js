import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ].sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    ),
    filter: '',
    filteredContacts: null,
  },
  reducers: {
    addReducer(state, action) {
      state.contacts.push(action.payload);
      state.contacts.sort((firstContact, secondContact) =>
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

export const { addReducer, deleteReducer, filterReducer } = slice.actions;
