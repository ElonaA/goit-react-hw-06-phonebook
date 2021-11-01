export const getContacts = state => state.contacts.items;
export const getFilteredContacts = state =>
  state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  );
export const getFilter = state => state.contacts.filter;