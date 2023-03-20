import React from 'react';

function CheckoutPage({ cart, removeFromCart, subtotal, discount, total }) {
  return (
    <div>
      <h2>Cart</h2>
      <div className='main'>
        {cart.map(item => (
          <div key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
      <p>Subtotal: {subtotal}</p>
      <p>Discount: {discount}</p>
      <p>Total: {total}</p>
    </div>
  );
}

export default CheckoutPage;
