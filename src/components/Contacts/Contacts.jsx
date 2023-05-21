import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch} from 'react-redux';
import { addContact } from 'Redux/operetions';
import { MainForm, Label, Input, Button } from './Contacts.styled';
import Notiflix from 'notiflix';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onChange = e => {
    e.currentTarget.name === 'name'
      ? setName(e.currentTarget.value)
      : setNumber(e.currentTarget.value);
  };

  const handleSubmit = async (values, { resetForm }) => {
    resetForm();
    const userObj = {
      name: name,
      phone: number,
    };

    const isDuplicate = await checkContactDuplicate(userObj);

    if (isDuplicate) {
      Notiflix.Notify.failure('This contact already exists.');
      return;
    }

    dispatch(addContact(userObj));
    setName('');
    setNumber('');
  };

  const checkContactDuplicate = async ({ name, phone }) => {
    try {
      const response = await axios.get(`/contacts?name=${name}&phone=${phone}`);
      const data = response.data;
      return data.length > 0;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <Formik initialValues={{ name, number }} onSubmit={handleSubmit}>
      <MainForm autoComplete="off">
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChange}
            value={number}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </MainForm>
    </Formik>
  );
}

export default ContactForm;