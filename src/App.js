import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoader } from './redux/selectors';
import * as phonebookOperations from './redux/operations';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default function App() {
  // const contacts = useSelector(getVisibleContacts);

  const loader = useSelector(getLoader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {loader && <p>Loading...</p>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
