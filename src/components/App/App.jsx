import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReducer, deleteReducer } from 'redux/contactSlice';
import { Container } from './App.styled';
import { Notify } from 'notiflix';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchFilter from 'components/SearchFilter';
import Notification from 'components/Notification';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  // useEffect(() => {
  //   if (contacts.length === 0) {
  //     localStorage.removeItem('contacts');
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = newContact => {
    const loweredNewContact = newContact.name.toLowerCase();
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === loweredNewContact
    );
    if (isContactExists) {
      Notify.failure(`${newContact.name} is already in phonebook.`);
      return;
    }
    dispatch(addReducer(newContact));
    Notify.success(`${newContact.name} added to phonebook successfully!`);
  };

  const deleteContact = contactId => {
    const contactName = contacts.find(contact => contact.id === contactId);
    dispatch(deleteReducer(contactId));
    Notify.warning(`${contactName.name} delete from phonebook.`);
  };

  const filtredContacts = () => {
    return contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  };

  return (
    <Container>
      <h1 className="title main-title">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="title sub-title">Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <SearchFilter />
          {filtredContacts().length > 0 ? (
            <ContactList
              contacts={filtredContacts()}
              onDelete={deleteContact}
            />
          ) : (
            <Notification message="No matches found" />
          )}
        </>
      ) : (
        <Notification message="Your phonebook is empty" />
      )}
    </Container>
  );
};

export default App;
