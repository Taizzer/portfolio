import React, { useContext, useEffect, useState } from "react";
import Contact from "./Contact";
import Table from "react-bootstrap/Table";
import { ContactContext } from "./ContactContext";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { Modal, Button, Alert } from "react-bootstrap";
import AddForm from "./AddForm";
import { v4 as uuidv4 } from "uuid";

const ContactList = () => {
  // const [contact, setContact] = useState([
  //   {
  //     id: 1,
  //     name: "sami",
  //     email: "sami@gmail.com",
  //     adress: "street usa 88",
  //     phone: 20000008950000,
  //   },
  //   {
  //     id: 2,
  //     name: "dani",
  //     email: "dani@gmail.com",
  //     adress: "street usa 22",
  //     phone: 232324000,
  //   },
  // ]);

  //all my contact array
  const { contact } = useContext(ContactContext);
  // console.log("my con", contact);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  //alert above table
  const [showAlert, setshowAlert] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  //alert above table
  // const handleShowAlert = () => {
  //   setshowAlert(true);
  // };
  //alert above table teh same alert fx but with timer
  const handleShowAlert = () => {
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 1000);
  };

  //auto close add form after add, fire this hook when contact changed
  useEffect(() => {
    handleClose();
    // call back function for alert
    return () => {
      handleShowAlert();
      console.log("call back function");
    };
    console.log("useEffectee");
  }, [contact]);

  //query
  const [query, setQuery] = useState("");
  console.log("query", query);

  //works good
  // console.log(
  //   "contact filterd",
  //   contact.filter((item) => {
  //     return item.name.toLowerCase().includes("j");
  //   })
  // );

  //works good
  // console.log(
  //   "contact filterd",
  //   contact.filter((item) => item.name.toLowerCase().includes("da"))
  // );
  const search = (myfilter) => {
    return myfilter.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query)
    );
  };
  // const data = search(myfilter);
  // console.log("news", data);

  return (
    //the best to remove the div replace with <>
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <div>
              <h4> </h4>
              <input
                style={{
                  width: "80%",
                  outline: "4px solid #fb8e8e",
                  borderRadius: "5px",
                  border: "0px",
                }}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="    search Name, Email, Address"
              />
            </div>
            <h2></h2>
          </div>
          <div className="col-sm-6">
            <button onClick={handleShow} className="btn btn-success">
              Add New Contact
            </button>
          </div>
        </div>
      </div>
      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setshowAlert(false)}
        dismissible
      >
        <h5>Updated</h5>
        {/* <p>updated</p> */}
        {/* <Alert.Heading>Oh Updated</Alert.Heading> */}
      </Alert>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* .sort((a, b) => (a.name < b.name ? -1 : 1)) sort increase  smaller to bigger a smaller than b return 1 =>A B C D */}

          {/*.sort((a, b) => (a.name < b.name ? 1 : -1)) 
          sort decrease  bigger to smaller  =>D C B A
          */}
          {/*before applying search  {contact.map((item, index) => { */}
          {search(contact).map((item, index) => {
            const { id } = item;
            return (
              <tr key={uuidv4()}>
                <Contact item={item} index={index} id={id} />
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* model  comment*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactList;
