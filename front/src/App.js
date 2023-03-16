import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Header from "./Header";

const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const [total, setTotal] = useState(0);

  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState("");

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);
  // -------------------------------------------------

  return (
    <div style={{ textAlign: "center" }}>
      <ProductList
        cartItems={cartItems}
        setCartItems={setCartItems}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
};

export default App;
