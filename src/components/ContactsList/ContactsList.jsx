import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactsCatalogue/ContactsCatalogue';
import { ContactList } from './ContactsList.styled';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ContactList>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ContactList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;