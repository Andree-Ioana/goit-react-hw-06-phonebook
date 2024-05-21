import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phoneSlice';
import style from './ContactBook.module.css';

const ContactBook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

    const handleSubmit = event => {
        event.preventDefault();
        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in the phonebook`);
            return;
        }
        dispatch(addContact(name, number));  //trimitem actiunea ca sa adaugam contactul
        setName('');  //resetam campul name si number
        setNumber('');
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.contactContainer}>
        <label className={style.labelContainer}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      onChange={(e) => setName(e.target.value) }
          />
        </label>
        <label className={style.labelContainer}>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      onChange={(e) => setNumber(e.target.value)}
          />
              </label>
              <button type='submit' className={style.addButton} >Add contact</button>
      </form>
    </div>
  );
};

export default ContactBook;
