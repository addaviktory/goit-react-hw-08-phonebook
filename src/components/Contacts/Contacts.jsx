import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import { addContact } from 'Redux/contactsSlice/operetions';

import {
  MainForm,
  Label,
  Input,
  Button,
  ContactsformBackdrop,
  CloseBox,
  FormTitle,
} from './Contacts.styled';

function ContactForm({ closeModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const onChange = e => {
    e.currentTarget.name === 'name'
      ? setName(e.currentTarget.value)
      : setNumber(e.currentTarget.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (number.length < 10) {
      toast.error('The phone number must contain at least 10 characters.', {
        style: {
          width: '400x',
          height: '40px',
          borderRadius: '10px',
          fontSize: '20px',
        },
      });
      return;
    }

    const isDuplicateContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
    );

    if (isDuplicateContact) {
      toast.error('This contact already exists.', {
        style: {
          width: '300px',
          height: '40px',
          borderRadius: '10px',
          fontSize: '20px',
        },
      });
      return;
    }

    resetForm();
    const userObj = {
      name: name,
      number: number,
    };
    dispatch(addContact(userObj));
    setName('');
    setNumber('');
    closeModal();
  };
  return (
    <ContactsformBackdrop>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        <MainForm autoComplete="off">
          <CloseBox onClick={() => closeModal()} />
          <FormTitle>Add contact</FormTitle>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              title="The name can only contain letters, apostrophes, dashes, and spaces. For example, Adrian, Jacob Mercer, Charles de Bats de Castelmore d'Artagnan."
              required
              onChange={onChange}
              value={name}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              title="The phone number must contain digits and start with a + sign."
              pattern="^\+[\d ()]*$"
              required
              onChange={onChange}
              value={number}
            />
          </Label>
          <Button type="submit">Add</Button>
        </MainForm>
      </Formik>
    </ContactsformBackdrop>
  );
}

ContactForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ContactForm;