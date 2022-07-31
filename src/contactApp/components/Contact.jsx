import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { ContactContext } from "./ContactContext";
import EditForm from "./EditForm";

const Contact = ({ item, index, id }) => {
  const { contact } = useContext(ContactContext);
  const { setContact } = useContext(ContactContext);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  // console.log("contact in contact", contact);
  //item.id in function will not work  const handleDelete = (item.id)
  const handleDelete = (id) => {
    // let deleteId = contact.filter((del) => del.id !== id);
    // setContact(deleteId);
    setContact((prev) => {
      let deleteId = contact.filter((del) => del.id !== id);
      return deleteId;
    });
  };

  //auto close add form after add, fire this hook when contact changed
  useEffect(() => {
    handleClose();
    console.log("useEffect");
    //when the componenet render close or contact the full list
  }, [Contact]);
  return (
    // important to remove the div  replace with react fragment
    <>
      <td> {index + 1}</td>
      <td> {item.name}</td>
      <td>{item.email}</td>
      <td> {item.phone}</td>
      <td>{item.address}</td>
      <td>
        <button
          style={{ marginRight: "5px" }}
          className=" btn  btn-primary"
          onClick={handleShow}
        >
          edit
        </button>

        <button
          className="btn btn-danger"
          onClick={() => handleDelete(id)}

          // onClick={() => handleDelete(item.id)} works with item.id other method
        >
          Delete
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditForm contactItem={item} />
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

export default Contact;
