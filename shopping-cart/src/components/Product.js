import React, { useContext } from "react";
import { Cart } from "../store/cart-context";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(Cart);

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>Rs {product.price.substring(0, 3)}</span>
      </div>

      {cart.includes(product) ? (
        <button
          className="actions"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== product.id));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="actions"
          onClick={() => {
            setCart([...cart, product]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
