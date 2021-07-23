import React from "react";
import { Link } from "react-router-dom";

const Header = ({ login, setLogin }) => {
  return (
    <div className="header">
      <h2>React Router Tutorial</h2>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <button className="btn" onClick={() => setLogin(!login)}>
        {login ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Header;
