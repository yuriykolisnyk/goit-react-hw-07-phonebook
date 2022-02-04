import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+38 067 459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '+38 067 443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '+38 067 645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '+38 067 227-91-26' },
];

const items = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
