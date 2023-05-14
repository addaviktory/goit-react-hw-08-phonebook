import { useState } from 'react';
import Notiflix from 'notiflix';
import { Formik, ErrorMessage} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/contactsSlice/contactsSlice';
import {
  Form,
  Label,
  Input,
  SubmitButton,
} from './Contacts.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.numbers);

  const handleSubmit = (values, { resetForm }) => {
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isNumberExists = contacts.some(
      contact => contact.number === number
    );

    if (isNameExists) {
      resetForm();
      Notiflix.Notify.failure(`${name} is already in contact`);
      return;
    }

    if (isNumberExists) {
      resetForm();
      Notiflix.Notify.failure(`${number} is already in contact`);
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

    Notiflix.Notify.success('Contact added successfully');
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={e => {
                handleChange(e);
                setName(e.currentTarget.value);
              }}
              value={values.name}
            />
            {errors.name && touched.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={e => {
                handleChange(e);
                setNumber(e.currentTarget.value);
              }}
              value={values.number}
            />
            {errors.number && touched.number && (
              <ErrorMessage>{errors.number}</ErrorMessage>
            )}
          </Label>

          <SubmitButton type="submit">Add contact</SubmitButton>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;