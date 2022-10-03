import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export const ContactContext = createContext();

const ContactContextProvidor = (props) => {
  const [contact, setContact] = useState([
    {
      id: uuidv4(),
      name: "sami",
      email: "sami@gmail.com",
      address: "street florida 88",
      phone: 2000000895,
    },

    {
      id: uuidv4(),
      name: "dani",
      email: "dani@gmail.com",
      address: "street california 22",
      phone: 2000009857,
    },
    {
      id: uuidv4(),
      name: "kali",
      email: "kali@gmail.com",
      address: "DC Street",
      phone: 2000009857,
    },
  ]);

  useEffect(() => {
    let localSave = JSON.parse(localStorage.getItem("contact"));
    setContact(localSave);
    // console.log("localSave", localSave);
    // console.log("people", people);
  }, []);

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  // const handleDelete = (id) => {
  //method 1
  //   // let deleteId = contact.filter((del) => del.id !== id);
  //   // setContact(deleteId);
  //method 2
  //   setContact((prev) => {
  //     let deleteId = contact.filter((del) => del.id !== id);
  //     return deleteId;
  //   });

  // example to what look like
  //value={{ contact, setContact,handleDelete }}

  const updateContact = (id, updatedContact) => {
    setContact(contact.map((item) => (item.id === id ? updatedContact : item)));

    // the down method does not work tried it
    // setContact(
    //   contact.map((item) => {
    //     item.id === id ? updatedContact : item;
    //   })
    // );
  };
  return (
    <ContactContext.Provider value={{ contact, setContact, updateContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvidor;
