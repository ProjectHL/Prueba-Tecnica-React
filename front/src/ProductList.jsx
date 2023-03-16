import React, { useEffect, useState } from "react";
import ProductDisplay from "./ProductDisplay";
import Header from "./Header";
import ProductListCarro from "./ProductListCarro";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowCart(true);
  };

  const handleAddToCart = (product) => {
    setCartItems(cartItems + 1);
    setTotal(total + product.price);
    setCartProducts([...cartProducts, product]);
  };

  const handleRemoveFromCart = (product) => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
      setTotal(total - product.price);
      setCartProducts(cartProducts.filter((item) => item.id !== product.id));
    };
  };
  

  const handleHideProduct = () => {
    setSelectedProduct(null);
    setShowCart(false);
  };

  return (
    <div>
      <Header 
      cartItems={cartItems} 
      total={total} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />
      {cartItems > 0 && <button className="minicarrito" onClick={() => handleSelectProduct(cartProducts)}>minicarrito</button>}

      <div className={`productlist${selectedProduct ? ' hide' : ''}`}>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h4 className="titulo">{product.name}</h4>
              <img className="img-cart"  src={`http://localhost:5000${product.image}`} width="200" height="200" alt={product.name} />
              <p className="product_desc">{product.description}</p>
              <p className="price">Precio: {product.price}</p>
              <button className="btn btn-secondary" onClick={() => handleSelectProduct(product)}>Ver Detalle</button>
              <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
            </li>
          ))}

        </ul>
      </div>
      
      {selectedProduct && (
        <div className="productdisplay">
          <ProductDisplay product={selectedProduct} onHide={handleHideProduct} />
        </div>
      )}

      {cartProducts.length > 0 && selectedProduct === cartProducts && (
        <div className="minicarrito">
          <ProductListCarro products={cartProducts} onHide={handleHideProduct} />
        </div>
      )}
    </div>

  );
};

export default ProductList;
