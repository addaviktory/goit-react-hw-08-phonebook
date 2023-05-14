import Contacts from './Contacts/Contacts';
import ContactsList from './ContactsList/ContactsList';
import Filter from 'components/FillterContacts/FillterContacts';
import Section from './Section/Section';

export function App() {
  return (
    <>
      <Section title="Phonebook">
        <Contacts/>
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
}