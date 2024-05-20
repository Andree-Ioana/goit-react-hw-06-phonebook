
import React from "react";
import ContactBook from "./ContactBook/ContactBook";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import Title from "./Title/Title";

export default function App() {
  
  return (
    <div>
      <Title  title="Phonebook"/>
      <ContactBook />
      <Title title="Contacts"/>
      <Filter/>
      <ContactList/>
    </div>
  );
}