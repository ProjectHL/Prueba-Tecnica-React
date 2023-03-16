import React from "react";

const ProductDisplay = ({ product, onHide }) => {
  return (
    <div>
      <h1>Detalle del Producto</h1>
      <div><button onClick={onHide}>Volver</button>
        <h4>{product.name}</h4>
        <img src={`http://localhost:5000${product.image}`} width="200" height="200" alt={product.name} />
        <p>{product.description}</p>
        <p>Precio: {product.price}</p>
      </div>
      
    </div>
  );
};

export default ProductDisplay;
