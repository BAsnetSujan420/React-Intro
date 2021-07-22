import React, { useState, createContext } from "react";

const initialState = {
  name: "Sujan Basnet",
  email: "basnetsujan1828420@gmial.com",
};

export const Context = createContext();

const Store = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};

export default Store;
