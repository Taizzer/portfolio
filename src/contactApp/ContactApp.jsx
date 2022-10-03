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
        <code
          style={{
            background: "white",
            padding: "0.3rem",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          <a
            target="_blank"
            href="https://github.com/Taizzer/portfolio/tree/main/src/contactApp"
          >
            https://github.com/Taizzer/portfolio/tree/main/src/contactApp
          </a>
        </code>
        <ContactList />
      </ContactContextProvidor>
    </div>
  );
};

export default ContactApp;
