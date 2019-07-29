import React from 'react';
import { Link } from 'react-router-dom';
import CartProductList from '../CartProductList/CartProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.scss';

const Cart = props => {
  const { cartItems, removeFromCart, changeQuantity, useCoupon, discountCoupon, coupons, shippingCost, finalSubtotal, toCheckout } = props;

  let couponInput = null;
  const onCouponSubmit = event => {
    event.preventDefault();
    props.useCoupon(couponInput.value)
  };

  return (
    <main className="cart container">
      <div className="row">
        <div className="col-12">
          <Link to={"products"} className="backToShopping">
            <button className="backgroundBtn">
              <FontAwesomeIcon icon="angle-double-left" />
              Back to shopping
            </button>
          </Link>
        </div>
      </div>
      <CartProductList
        cartItems={cartItems} 
        removeFromCart={(id) => removeFromCart(id)} 
        changeQuantity={(id, quantity) => changeQuantity(id, quantity)} 
      />
      <div className="row">
        <div className="col-12">
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
                className="couponCodeSubmit backgroundBtn" 
                value="&#x1F87A;" 
              />
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Link to={"checkout"} 
            className="checkoutButton" 
            onClick={(subtotal) => toCheckout(parseFloat(finalSubtotal()))}
          >
            <button className="backgroundBtn">
              <FontAwesomeIcon icon="angle-double-right" />
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;