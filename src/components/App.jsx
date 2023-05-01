import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import Section from './Section/Section';
import { getVisibleContacts } from './Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const [visibleContacts, setVisibleContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    setVisibleContacts(getVisibleContacts(contacts, filter));
  }, [contacts, filter]);

  const formSubmitHandler = data => {
    setContacts(prevContacts => [...prevContacts, { ...data, id: nanoid() }]);
  };

  const onFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      const contactsWithIds = parsedContacts.map(contact => ({
        ...contact,
        id: contact.id || nanoid(),
      }));
      setContacts(contactsWithIds);
    }
  }, []);

  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <Contacts onSubmit={formSubmitHandler} />
      <Section title="Contacts">
        <ContactsFilter value={filter} onFilter={onFilter} />
        {visibleContacts.length > 0 && (
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        )}
      </Section>
    </div>
  );
}