import React, { useContext, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Form, Button } from "react-bootstrap";
import { ContactContext } from "./ContactContext";
import { v4 as uuidv4 } from "uuid";

//submit new contact

const AddForm = () => {
  // import from context
  const { setContact } = useContext(ContactContext);
  const { contact } = useContext(ContactContext);
  //out full  list contact
  console.log("contact", contact);
  //example
  // const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  console.log("person", person);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name]: value,
    });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //other method
    // const newPerson = { ...person, id: new Date().getTime().toString() };
    const newPerson = { ...person, id: uuidv4() };
    // setPeople([...people, newPerson]);
    setContact([...contact, newPerson]);
    setPerson({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
    console.log("new pers", newPerson);

    // console.log(people);
  };

  return (
    <div>
      AddForm
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            name="name"
            value={person.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            as="textarea"
            placeholder="address"
            required
            rows={3}
            name="address"
            value={person.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Control
            type="text"
            placeholder="phone only numbers"
            name="phone"
            value={person.phone}
            onChange={handleChange}
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
          Add New contact
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
