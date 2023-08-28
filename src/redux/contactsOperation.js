import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../contacts_api/fetchContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await contactsAPI.fetchAllContacts();
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const responce = await contactsAPI.addNewContact(contact);
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const responce = await contactsAPI.deleteContacts(contactId);
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
