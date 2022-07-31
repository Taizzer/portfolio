import React from "react";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactContextProvidor from "./components/ContactContext";
import "./ContactApp.css";

// rafce

const ContactApp = () => {
  return (
    <div style={{ maxWidth: "98%", margin: "auto", marginTop: "20px" }}>
      <ContactContextProvidor>
        <ContactList />
      </ContactContextProvidor>
    </div>
  );
};

export default ContactApp;
