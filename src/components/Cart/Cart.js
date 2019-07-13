import React from 'react';
import { Link } from 'react-router-dom';
import CartProductList from '../CartProductList/CartProductList';
import './Cart.scss';

const Cart = props => {
  const { cartItems, removeFromCart, changeQuantity } = props;

  let subtotalValues = [];
  const reducedSubtotal = () => {
    cartItems.map(cartItem => subtotalValues.push(cartItem.quantity * cartItem.item.price));
    function sum(x, y) {
      return x + y;
    };
    return subtotalValues.length !== 0 ? subtotalValues.reduce(sum) : "0";
  };

  return (
    <div className="cart">
      <Link className="backToShopping" to={"products"}>
        Back to shopping
      </Link>
      <CartProductList
        cartItems={cartItems} 
        removeFromCart={(id) => removeFromCart(id)} 
        changeQuantity={(id, quantity) => changeQuantity(id, quantity)} 
      />
      <div className="subtotal">
        <div className="subtotalLine">
          <b>Subtotal:</b> <span className="value">{reducedSubtotal()} zł</span>
        </div>
        <p>Have a Coupon Code?</p>
      </div>
      <button className="checkoutButton">Proceed to checkout</button>
    </div>
  );
};

export default Cart;