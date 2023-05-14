import Notiflix from 'notiflix';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { numbers: [] },
  reducers: {
    addContact(state, action) {
      state.numbers.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      const index = state.numbers.findIndex(
        contact => contact.id === action.payload
      );
      state.numbers.splice(index, 1);
      Notiflix.Notify.success(`Contact deleted successfully`);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['numbers'],
};

export const numbersReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts;