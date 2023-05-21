import Contacts from './Contacts/Contacts';
import ContactsList from './ContactsList/ContactsList';
import Filter from 'components/FillterContacts/FillterContacts';
import Section from './Section/Section';
import { getLoading, getError } from 'Redux/selector';
import { fetchContacts } from 'Redux/operetions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Contacts/>
      </Section>

      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </Section>
    </>
  );
}