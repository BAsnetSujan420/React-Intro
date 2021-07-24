import React from "react";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main style={navStyle}>{children}</main>
    </div>
  );
};

const navStyle = {
  margin: "3rem auto",
  width: "90%",
  maxWidth: "40rem",
};

export default Layout;
