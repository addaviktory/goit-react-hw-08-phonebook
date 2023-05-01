import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter, LabelFilter } from './ContactsFilter.styled';

function ContactsFilter({ value, onFilter }) {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        placeholder="Enter name of contact"
        value={value}
        onChange={onFilter}
      />
    </LabelFilter>
  );
}

ContactsFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ContactsFilter;