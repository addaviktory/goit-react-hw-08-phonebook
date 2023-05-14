import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/contactsSlice/contactsSlice';
import { deleteContact } from 'Redux/contactsSlice/contactsSlice';
import { getFiltedContacts } from 'Redux/filterSlice/filterSlice';
import { getVisibleContacts } from '../Filter';
import { ContactItemLi, DeleteBtn } from './ContactsCatalogue.styled';


const ContactItem = () => {
  const dispatch = useDispatch();
  const { numbers } = useSelector(getContacts);
  const filter = useSelector(getFiltedContacts);

  return getVisibleContacts(numbers, filter).map(({ id, name, number }) => {
    return (
      <ContactItemLi key={id}>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </DeleteBtn>
      </ContactItemLi>
    );
  });
};

export default ContactItem;
