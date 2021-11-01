import { createAction } from '@reduxjs/toolkit';
const dataId = require('shortid');

const addContacts = (name, number) => ({
  payload: {
    id: dataId.generate(),
    name,
    number,
  },
});

const ADD = createAction('contacts/add', addContacts);
const DELETE = createAction('contacts/delete');
const FILTER = createAction('contacts/filter');
const UNIQNAME = createAction('contacts/uniqName');

// eslint-disable-next-line import/no-anonymous-default-export
export default { ADD, DELETE, FILTER, UNIQNAME };