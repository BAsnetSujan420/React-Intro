import React from "react";
import { CartState } from "../store/CartContext";
import FilterProducts from "./FilterProducts";
import Product from "./Product";
import "./style.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
      <FilterProducts />
      <div className="productContainer">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
