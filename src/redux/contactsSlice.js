import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperation';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        contacts => contacts.id !== action.payload.id
      );
    },
    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },

    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
