import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { editContact } from 'Redux/contactsSlice/operetions';
import { toast } from 'react-hot-toast';

import {
  MainForm,
  Label,
  Input,
  Button,
  ContactsformBackdrop,
  CloseBox,
  FormTitle,
} from './EditContactForm.styled';

export const EditContactForm = ({ selectedContact, closeEditModal }) => {
  const [id] = useState(selectedContact.id);
  const [name, setName] = useState(selectedContact.name);
  const [number, setNumber] = useState(selectedContact.number);

  const dispatch = useDispatch();

  const onChange = e => {
    e.currentTarget.name === 'name'
      ? setName(e.currentTarget.value)
      : setNumber(e.currentTarget.value);
  };
  const contacts = useSelector(state => state.contacts.items);
  const handleSubmit = () => {

    if (number.length < 10) {
      toast.error('The phone number must contain at least 10 characters.', {
        style: {
          width: '400px',
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

    const userObj = {
      id: id,
      name: name,
      number: number,
    };
    dispatch(editContact(userObj));
    closeEditModal();
  };

  return (
    <ContactsformBackdrop>
      <Formik initialValues={(name, number)} onSubmit={handleSubmit}>
        <MainForm autoComplete="off">
          <CloseBox
            onClick={() => {
              closeEditModal();
            }}
          />
          <FormTitle>Edit contact form</FormTitle>
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

          <Button type="submit">Edit contact</Button>
        </MainForm>
      </Formik>
    </ContactsformBackdrop>
  );
};

EditContactForm.propTypes = {
  selectedContact: PropTypes.object.isRequired,
  closeEditModal: PropTypes.func.isRequired,
};