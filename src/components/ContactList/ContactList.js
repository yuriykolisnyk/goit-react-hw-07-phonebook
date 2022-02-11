import { useSelector } from 'react-redux';
import { useFetchContactsQuery, useDeleteContactsMutation } from '../../redux/slice';
import { getFilter } from '../../redux/selectors';
import { Item, Name, Number, Button } from './ContactList.styled';

const ContactsList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [onDeleteContact] = useDeleteContactsMutation();

  const filter = useSelector(getFilter);

  const getFilteredContacts = contacts =>
    contacts?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const contactFilterList = getFilteredContacts(contacts);

  // const contactFilterList = contacts ? getFilteredContacts(contacts) : null;

  return (
    <>
      {contacts && (
        <ul>
          {contactFilterList.map(({ id, name, number }) => (
            <Item key={id}>
              <Name>{name}: </Name>
              <Number href={`tel:${number}`}>{number}</Number>
              <Button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </Button>
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
