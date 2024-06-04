import React from "react";
import '/Users/arawat99/Desktop/Shopping cart frontend/sc-frontend/src/CSS/cartFile.css'

const Cart = ({ cart1 }) => {
  console.log(cart1);

  return (
    <div>
      <h3 className="text-center">Your Cart</h3>
      {cart1.map((cartItem, index) => {
        return (
          <div className="text-center">
            <div className="cart-item">{cartItem.name}</div>

            <div className="cart-item">Rs. {cartItem.price}</div>
          </div>
        );
      })}
      <p className="text-center">
        Total Amount: Rs.
        {cart1
          .map((item) => item.price)
          .reduce((total, currValue) => total + currValue, 0)}
      </p>
    </div>
  );
};

export default Cart;
