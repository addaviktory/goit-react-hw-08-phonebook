import { useState } from 'react';
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
  FormTitle,
  ButtonDelete,
  ContainerDelete

} from './ContactsCatalogue.styled';

const ContactItem = ({ selectedContact, openEditModal }) => {
  const dispatch = useDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiltedContacts);

  const handleEdit = (id, name, number) => {
    selectedContact({ id, name, number });
    openEditModal();
  };

  const handleDeleteConfirmation = (id) => {
    setConfirmDelete(true);
    setDeleteId(id);
  };

  const handleDelete = () => {
    dispatch(deleteContact(deleteId));
    setConfirmDelete(false);
    setDeleteId(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setDeleteId(null);
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
              handleDeleteConfirmation(id);
            }}
          >
            Delete
          </Button>
        </ButtonContainer>
        {confirmDelete && id === deleteId && (
          <ContainerDelete>
          <FormTitle>
          <p>Are you sure you want to delete this contact</p>
          <ButtonDelete onClick={handleDelete}>Yes</ButtonDelete>
          <ButtonDelete onClick={handleCancelDelete}>No</ButtonDelete>
          </FormTitle>
          </ContainerDelete>
        )}
      </Item>
    );
  });
};

ContactItem.propTypes = {
  selectedContact: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
};

export default ContactItem;