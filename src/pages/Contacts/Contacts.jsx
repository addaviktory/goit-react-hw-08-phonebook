import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/contactsSlice/operetions';
import { useEffect, useState } from 'react';
import { HiOutlineUserAdd } from 'react-icons/hi';

import ContactForm from 'components/Contacts/Contacts';
import Filter from 'components/FillterContacts/FillterContacts';
import ContactsList from 'components/ContactsList/ContactsList';
import { getLoading } from 'Redux/contactsSlice/selectors';
import {
  ContactsPageBox,
  LoadingBox,
  ContactsPageContainer,
  AddContactsButton,
} from './Contacts.styled';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => getLoading(state));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const showContactModal = () => {
    setShowModal(() => true);
  };

  const closeContactsModal = () => {
    setShowModal(() => false);
  };

  return (
    <ContactsPageContainer>
      <ContactsPageBox>
        <AddContactsButton onClick={() => showContactModal()}>
          <HiOutlineUserAdd />
          Add contact
        </AddContactsButton>
        {showModal && <ContactForm closeModal={closeContactsModal} />}
        <Filter />
        <LoadingBox>{isLoading && 'Request in progress...'}</LoadingBox>
        <ContactsList />
      </ContactsPageBox>
    </ContactsPageContainer>
  );
};

export default ContactsPage;