import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/selector';
import { deleteContact } from 'Redux/operetions';
import { getFiltedContacts } from 'Redux/filterSlice/filterSlice';
import { getVisibleContacts } from '../Filter';
import { Button, Item, NameContainer, NamePrg } from './ContactsCatalogue.styled';

const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFiltedContacts);

  return getVisibleContacts(contacts, filter).map(({ id, name, phone }) => {
    return (
      <Item key={id}>
        <NameContainer>
          <NamePrg>{name}:</NamePrg>
          <p>{phone}</p>
        </NameContainer>
        <Button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactItem;