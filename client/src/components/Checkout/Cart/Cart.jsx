import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Component will display the items in the cart, and use logic to make sure items added to car will remain in cart.
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
