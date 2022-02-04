export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const todos = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return todos.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};
