import React, { useState, useEffect } from "react";
import AddList from "./AddList.js";
import AddForm from "./AddForm.js";
import "./add.scss";
const Add = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 //for filter select option
 const [status, setStatus] = useState("all");
 //for filter
 //for filter select option
 const [filterItem, setFilterItem] = useState([]);
 //for filter
 const [people, setPeople] = useState([]);
 return (
  <div className="add-container">
   <h2>Add</h2>
   <AddForm
    name={name}
    email={email}
    status={status}
    filterItem={filterItem}
    people={people}
    setName={setName}
    setEmail={setEmail}
    setStatus={setStatus}
    setFilterItem={setFilterItem}
    setPeople={setPeople}
   />
   <AddList
    name={name}
    email={email}
    status={status}
    filterItem={filterItem}
    people={people}
    setName={setName}
    setEmail={setEmail}
    setStatus={setStatus}
    setFilterItem={setFilterItem}
    setPeople={setPeople}
   />
  </div>
 );
};

export default Add;
