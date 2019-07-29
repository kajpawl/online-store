import React from 'react';
import { Link } from 'react-router-dom';
import CartProductList from '../CartProductList/CartProductList';
import './Cart.scss';

const Cart = props => {
  const { cartItems, removeFromCart, changeQuantity, useCoupon, discountCoupon, coupons, shippingCost, finalSubtotal, toCheckout } = props;

  let couponInput = null;
  const onCouponSubmit = event => {
    event.preventDefault();
    props.useCoupon(couponInput.value)
  };

  return (
    <main className="cart">
      <Link to={"products"} className="backToShopping">
        Back to shopping
      </Link>
      <CartProductList
        cartItems={cartItems} 
        removeFromCart={(id) => removeFromCart(id)} 
        changeQuantity={(id, quantity) => changeQuantity(id, quantity)} 
      />
      <div className="subtotal">
        <div className="subtotalLine">
          <b>Subtotal:</b> <span className="value">$ {finalSubtotal()}</span>
        </div>
        <form className="addCouponCode" onSubmit={onCouponSubmit}>
          <input 
            className="couponInput" 
            type="text" 
            placeholder="Have a Coupon Code?" 
            ref={node => couponInput = node} 
          />
          <input 
            type="submit" 
            className="couponCodeSubmit" 
            value="Submit" 
          />
        </form>
      </div>
      <Link to={"checkout"} 
        className="checkoutButton" 
        onClick={(subtotal) => toCheckout(parseFloat(finalSubtotal()))}
      >
        Proceed to checkout
      </Link>
    </main>
  );
};

export default Cart;