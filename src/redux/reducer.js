import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';

const filter = createReducer('', {
  [changeFilter]: (_, actions) => actions.payload,
});

export default combineReducers({
  filter,
});
