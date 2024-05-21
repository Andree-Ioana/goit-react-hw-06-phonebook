import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/phoneSlice";
import style from './ContactList.module.css';


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.phonebook.contacts);
    const filter = useSelector(state => state.filter);

     const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
        <ul className={style.listContainer}>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id} className={style.item}>
                    {name}: {number}
                    
                    <button onClick={() => dispatch(removeContact(id))} className={style.delete}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;