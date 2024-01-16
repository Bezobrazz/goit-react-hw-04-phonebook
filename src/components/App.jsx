import { useState, useEffect } from 'react';
import { StyledContainer } from './styled';
import { Typography } from '@mui/material';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return (
      savedContacts || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
    const isNameAlreadyExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameAlreadyExist) {
      Notify.failure(
        `Contact with name '${name}' already exists in the phonebook.`
      );
    } else {
      const uniqueId = nanoid();
      setContacts(prevContacts => [
        { id: uniqueId, name, number },
        ...prevContacts,
      ]);
    }
  };

  const onInputChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
    Notify.success('Contact deleted successfully.');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h1" align="center" fontSize="60px" gutterBottom>
        Phonebook
      </Typography>
      <ContactForm contacts={contacts} onFormSubmit={onFormSubmit} />
      <Typography variant="h2" align="center" fontSize="40px" gutterBottom>
        Contacts
      </Typography>
      <Filter value={filter} onChange={onInputChange} />
      <ContactList
        onDeleteContact={onDeleteContact}
        contacts={filteredContacts}
      />
    </StyledContainer>
  );
};
