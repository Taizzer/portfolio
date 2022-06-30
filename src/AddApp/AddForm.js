import React, { useState, useEffect } from "react";
import "./add.scss";
const AddForm = ({
 name,
 email,
 status,
 filterItem,
 people,
 setName,
 setEmail,
 setStatus,
 setFilterItem,
 setPeople
}) => {
 const handleChangeName = (e) => {
  setName(e.target.value);
  //   setName(reff.current.value);
 };

 const handleChangeEmail = (e) => {
  setEmail(e.target.value);
  //   setEmail(reff.current.value);
 };
 const handleSubmit = (e) => {
  e.preventDefault();
  if (name && email) {
   const person = {
    name: name,
    email: email,
    id: new Date().getTime().toString(),
    completed: false
   };
   setPeople([...people, person]);
   //console.log(person);
  } else {
   console.log("it's empty");
  }
  setEmail("");
  setName("");
 };

 const statusHandler = (e) => {
  setStatus(e.target.value);
 };

 return (
  <div className="addform-container">
   {/* SECTION FOR AddForm */}
   <section className="addform-section-container">
    <form action="" className="addform-form">
     <div className="form-control">
      <label htmlFor="name">first Name</label>
      <input
       className="addform-input"
       onChange={handleChangeName}
       //             ref={refName}
       value={name}
       type="text"
       name="name"
       id="name"
       //name="fName"
       //id="fname"
      />

      {/* </div> */}

      {/* <div className="form-control"> */}
      <label htmlFor="email">email</label>
      <input
       className="addform-input"
       onChange={handleChangeEmail}
       //             ref={refEmail}
       value={email}
       type="text"
       name="email"
       id="email"
      />
     </div>

     <button className="addform-button" onClick={handleSubmit} type="submit">
      Add pers
     </button>
    </form>
   </section>
   {/* SECTION FOR AddForm */}
   {/* SECTION FOR SELECT */}
   <section>
    <div className="div-select">
     <select onChange={statusHandler} name="" id="" className="filter-select">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">uncompleted</option>
     </select>
    </div>
   </section>
   {/* SECTION FOR SELECT */}
  </div>
 );
};

export default AddForm;
