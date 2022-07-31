import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export const ContactContext = createContext();

const ContactContextProvidor = (props) => {
  const [contact, setContact] = useState([
    {
      id: uuidv4(),
      name: "sami",
      email: "sami@gmail.com",
      address: "street usa 88",
      phone: 20000008950000,
    },

    {
      id: uuidv4(),
      name: "dani",
      email: "dani@gmail.com",
      address: "street usa 22",
      phone: 118880,
    },
    {
      id: uuidv4(),
      name: "dani",
      email: "kali@gmail.com",
      address: "rad545",
      phone: 232324000,
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
