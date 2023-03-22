import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterSlice.reducer },
});

export { store };
