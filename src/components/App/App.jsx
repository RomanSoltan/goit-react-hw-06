import s from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const LS_KEY = 'contacts';

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? defaultContacts,
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const findSimilar = contacts.find(
      contact => contact.number === newContact.number,
    );
    if (findSimilar) {
      toast.error('Sorry! This number already exists', {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    setContacts(prev => {
      return [...prev, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prev => {
      return prev.filter(item => item.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
  );

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      {!contacts.length ? (
        <p className={s.descr}>No contacts. Please add a new contact</p>
      ) : (
        <>
          <SearchBox value={filter} onFilter={setFilter} />
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
