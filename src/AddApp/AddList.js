import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
const AddList = ({
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
 //  *********** for storage test
 useEffect(() => {
  let localSave = JSON.parse(localStorage.getItem("people"));
  setPeople(localSave);
  console.log("localSave", localSave);
  console.log("people", people);
 }, []);

 useEffect(() => {
  localStorage.setItem("people", JSON.stringify(people));
 }, [people]);

 //*********

 const deleteItem = (id) => {
  //   // item.id == id it remove all except the one clicked the matched id that i have clicked keep it return the one that i clicked

  //   //the one that i clicked that i want return it the one i want
  //   //return filter the id's that not want the one i clicked id match and filter return the id's that does not match.
  //   //!== id  Does not  match returned.

  let newPeople = people.filter((item) => item.id !== id);
  setPeople(newPeople);
 };

 //for select change get the value of select

 //  const statusHandler = (e) => {
 //   setStatus(e.target.value);
 //  };

 const filterHandler = (e) => {
  switch (status) {
   case "completed":
    setFilterItem(people.filter((i) => i.completed === true));
    break;

   case "uncompleted":
    setFilterItem(people.filter((i) => i.completed === false));
    break;

   default:
    setFilterItem(people);
    break;
  }
 };

 //for select change get the value of select

 useEffect(() => {
  filterHandler();
 }, [people, status]);

 return (
  <div>
   <h2>AddList</h2>

   {/* ******* */}

   {/* 
    instead of old this :
    people.map((person)
    filterItem.map((person)
    */}

   {filterItem.map((person) => {
    const { id, name, email } = person;
    //NEW NOTE: person need to be defined, i can not put it up.
    //allow me to c log the object peron that iam clicking
    const clog = (e) => {
     console.log(person);
     console.log(e.target.className);
    };

    return (
     <AddItem
      id={id}
      key={id}
      name={name}
      email={email}
      deleteItem={deleteItem}
      person={person} // for log of object just trainning
      clog={clog} // for log of object just trainning
      people={people}
      setPeople={setPeople}
      //setStatus={setStatus}
     />
    );
   })}

   {/* ******** */}
  </div>
 );
};

export default AddList;
