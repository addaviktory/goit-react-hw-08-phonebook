import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getVisibleContacts } from '../Filter';
import { getContacts } from 'Redux/contactsSlice/selectors';
import { getFiltedContacts } from 'Redux/filterSlice/filterSlice';
import { deleteContact } from 'Redux/contactsSlice/operetions';
import {
  Button,
  Item,
  NameContainer,
  NamePrg,
  NumberPrg,
  ButtonContainer,
} from './ContactsCatalogue.styled';

const ContactItem = ({ selectedContact, openEditModal }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiltedContacts);

  const handleEdit = (id, name, number) => {
    selectedContact({ id, name, number });
    openEditModal();
  };

  return getVisibleContacts(contacts, filter).map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <NameContainer>
          <NamePrg>{name}</NamePrg>
          <NumberPrg>{number}</NumberPrg>
        </NameContainer>
        <ButtonContainer>
          <Button
            type="button"
            onClick={() => {
              handleEdit(id, name, number);
            }}
          >
            Edit
          </Button>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </ButtonContainer>
      </Item>
    );
  });
};

ContactItem.prototype = {
  selectedContact: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};

export default ContactItem;