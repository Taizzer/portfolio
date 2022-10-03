import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./redux/userSlice";
const Update = () => {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const name2 = useSelector((state) => state.user.name);
  console.log("user in update", user);
  console.log("user in update", user.name);
  // console.log("name",name);

  // for redux storage

  const handleChange = (e) => {
    e.preventDefault();
    // dispatch(update({ name: name, id: new Date().getTime().toString() }));

    dispatch(update({ name: name, id: new Date().getTime().toString() }));
    // const testData = dispatch(
    //   update({ name: name, id: new Date().getTime().toString() })
    // );
    // setData([testData]);

    // dispatch(
    //   update({ name: name, email: email, id: new Date().getTime().toString() })
    // );
    setName("");
  };

  return (
    <div>
      {/* <h2>
        name:{user.name} email : {user.email}
      </h2> */}
      <form action="">
        <div>
          <label>Name</label>
          <input
            style={{
              border: "none",
              outline: "1px solid black",
              padding: "0.2rem",
              borderRadius: "4px",
              marginLeft: "8px",
              marginBottom: "8px",
            }}
            type="text"
            // placeholder={user.name}
            placeholder="update.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* <div>
          <label>email</label>
          <input
            type="text"
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        <button
          style={{
            padding: "2px 8px 2px 8px",
            borderRadius: "4px",
            backgroundColor: "none",
            border: "1px solid black",
          }}
          onClick={handleChange}
        >
          update
        </button>
      </form>
    </div>
  );
};

export default Update;
