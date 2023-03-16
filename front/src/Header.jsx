import React from "react";

const Header = ({ cartItems, onAdd, onRemove, total }) => {

  return (
    <header className="header">
      <h1>Carrito de Compra Simple</h1>
      <div className="cart">
        <button className="cart-button" onClick={onRemove}>-</button>
        <input type="number" value={cartItems} onChange={(e) => onAdd(e.target.value)} />
        <button className="cart-button" onClick={onAdd}>+</button>
        <div className="total">{total.toFixed(2)} USD</div>
      </div>
    </header>
  );
};

export default Header;
