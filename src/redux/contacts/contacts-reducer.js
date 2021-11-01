import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.ADD]: (state, { payload }) => [...state, payload],
  [actions.DELETE]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [actions.UNIQNAME]: state => state,
});

const filter = createReducer('', {
  [actions.FILTER]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});