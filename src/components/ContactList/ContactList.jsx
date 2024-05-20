import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/phoneSlice";



const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.phonebook.contacts);
    const filter = useSelector(state => state.filter);

     const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
        <ul>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id}>
                    {name}: {number}
                    <button onClick={() => dispatch(removeContact(id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;