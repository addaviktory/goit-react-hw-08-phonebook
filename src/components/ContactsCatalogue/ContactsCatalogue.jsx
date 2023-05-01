import PropTypes from 'prop-types';
import { ContactItemLi, DeleteBtn } from './ContactsCatalogue.styled';

function ContactItem({ contacts, onDeleteContact }) {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <ContactItemLi key={id}>
          {name}: {number}
          <DeleteBtn type="button" onClick={() => onDeleteContact(id, name)}>
            Delete
          </DeleteBtn>
        </ContactItemLi>
      ))}
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
