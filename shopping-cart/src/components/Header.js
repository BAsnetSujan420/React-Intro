import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../store/cart-context";
import "./styles.css";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div>
      <span className="header"> React Context API Tutorial</span>
      <nav className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
