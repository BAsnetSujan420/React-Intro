import React, { useEffect, useContext, useState } from "react";
import { Cart } from "../store/cart-context";
import Product from "./Product";

const CartList = () => {
  const [total, setTotal] = useState(0);

  const { cart } = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total : {total}</span>
      <div className="productContainer">
        {cart.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
