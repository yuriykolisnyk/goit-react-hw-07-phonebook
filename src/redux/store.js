import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './reducer';
import { contactsApi } from '../contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
});
