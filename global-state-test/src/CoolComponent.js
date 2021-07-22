import React, { useContext } from "react";
import { Context } from "./Store";

const person = { name: "Lemon", email: "lemon@gmail.com" };

const CoolComponent = () => {
  const [user, setUser] = useContext(Context);

  const handleClick = async () => {
    setUser(person);
  };

  return (
    <>
      <h2>I'm a cool component</h2>
      <p>User : {user.name}</p>
      <p>Email : {user.email}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default CoolComponent;
