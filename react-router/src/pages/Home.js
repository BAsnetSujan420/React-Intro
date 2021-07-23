import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <h3>Home Page</h3>;
};

export default Home;
