import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery, useDeleteContactsMutation } from '../../contactsSlice';
import { Item, Name, Number, Button } from './ContactList.styled';

export default function ContactList() {
  const { data: contacts } = useFetchContactsQuery();
  const [onDeleteContact] = useDeleteContactsMutation();

  const contactsFilter = useSelector(state => {
    const { filter } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    let filteredContacts = [];
    if (contacts) {
      filteredContacts = contacts.filter(item =>
        item.name.toLowerCase().includes(normalizedFilter),
      );
    }
    return filteredContacts;
  });
  return (
    <ul>
      {contactsFilter.map(({ id, name, number }) => (
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
