import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';
import axios from 'axios';

const ShopPage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Endpoint to get all products
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Shop</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
