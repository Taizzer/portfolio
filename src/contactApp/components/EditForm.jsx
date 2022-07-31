import React, { useContext, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Form, Button } from "react-bootstrap";
import { ContactContext } from "./ContactContext";
import { v4 as uuidv4 } from "uuid";

//submit new contact

const EditForm = ({ contactItem }) => {
  // import from context
  const { setContact } = useContext(ContactContext);
  const { contact } = useContext(ContactContext);

  //out full  list contact
  // console.log("contact", contact);
  //example
  // const [people, setPeople] = useState([]);
  // const [person, setPerson] = useState({
  //   name: "",
  //   email: "",
  //   address: "",
  //   phone: "",
  // });

  // console.log("person", person);
  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setPerson({
  //     ...person,
  //     [name]: value,
  //   });
  //   console.log(name, value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   //other method
  //   // const newPerson = { ...person, id: new Date().getTime().toString() };
  //   const newPerson = { ...person, id: uuidv4() };
  //   // setPeople([...people, newPerson]);
  //   setContact([...contact, newPerson]);
  //   setPerson({
  //     name: "",
  //     email: "",
  //     address: "",
  //     phone: "",
  //   });
  //   console.log("new pers", newPerson);

  // console.log(people);
  const [name, setName] = useState(contactItem.name);
  const [email, setEmail] = useState(contactItem.email);
  const [address, setAddress] = useState(contactItem.address);
  const [phone, setPhone] = useState(contactItem.phone);
  const { updateContact } = useContext(ContactContext);
  const id = contactItem.id;

  const updatedContact = { id, name, email, address, phone };
  console.log(name, email, phone, id, address);
  console.log("updatedContact", updatedContact);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, updatedContact);
  };
  return (
    <div>
      EditForm
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            as="textarea"
            placeholder="address"
            required
            rows={3}
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="text"
            placeholder="phone only numbers"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
        <Button variant="success" type="submit">
          Edit contact
        </Button>
      </Form>
    </div>
  );
};

export default EditForm;
