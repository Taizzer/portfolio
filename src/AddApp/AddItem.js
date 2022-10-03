import React, { useState, useEffect } from "react";

const AddItem = ({
 id,
 name,
 email,
 deleteItem,
 person,
 clog,
 people,
 setPeople
 //setStatus
}) => {
 // map the people array of obj and change and return
 const completeHandler = () => {
  setPeople(
   people.map((i) => {
    if (i.id === person.id) {
     return { ...i, completed: !i.completed };
    } else {
     return i;
    }
   })
  );
 };
 // map the people array of obj and change and return

 return (
  <div>
   <h2>Add ToDO</h2>

   <div>
    <h1 className={`${person.completed ? "completed" : ""} `}>{name}</h1>
    <h3>{email}</h3>
    <button onClick={() => deleteItem(id)}>del</button>

    <button onClick={completeHandler}>
     completed
     <i className="fas fa-check"></i>
    </button>

    <button className="nouse nouse2" onClick={clog}>
     con.log person obj
     <i className="fas fa-check"></i>s
    </button>
   </div>
  </div>
 );
};

export default AddItem;
