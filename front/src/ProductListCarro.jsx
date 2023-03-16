const ProductListCarro = ({ products }) => {
  const groupedProducts = products.reduce((acc, product) => {
    const existingProduct = acc.find((p) => p._id === product._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const newProduct = { ...product, quantity: 1 };
      acc.push(newProduct);
    }
    return acc;
  }, []);

  return (
    <div>
      <ul>
        {groupedProducts.map((product) => (
          <li key={product._id}>
            <h4>{product.name} - {product.quantity} - ${product.quantity * product.price}</h4>
            <img src={`http://localhost:5000${product.image}`} width="200" height="200" alt={product.name} />
            <p>Precio: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListCarro;
