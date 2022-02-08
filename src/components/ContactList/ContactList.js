import { useSelector, useDispatch } from 'react-redux';
import * as phonebookOperations from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';

import { Item, Name, Number, Button } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}: </Name>
          <Number href={`tel:${number}`}>{number}</Number>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
}
