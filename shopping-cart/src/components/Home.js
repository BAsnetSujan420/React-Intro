import React, { useState } from "react";
import faker from "faker";
import Product from "./Product";

faker.seed(100);

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
