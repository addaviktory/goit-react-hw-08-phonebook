import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/contactsSlice/contactsSlice';
import { Form, Label, Input, SubmitButton } from './Contacts.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');

  const dispatch = useDispatch();

  const onChange = e => {
    e.currentTarget.name === 'name'
      ? setName(e.currentTarget.value)
      : setNamber(e.currentTarget.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    const userObj = {
      name: name,
      number: number,
    };
    dispatch(addContact(userObj));
    setName('');
    setNamber('');
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, values }) => (
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
                onChange(e);
              }}
              value={values.name}
            />
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
                onChange(e);
              }}
              value={values.number}
            />
          </Label>

          <SubmitButton type="submit">Add contact</SubmitButton>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;