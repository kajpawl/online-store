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
    <main className="cart">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Cart</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link to={"products"}>
              <button className="backgroundBtn backToShopping">
                <FontAwesomeIcon icon="angle-double-left" />
                Back to shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CartProductList
        cartItems={cartItems} 
        removeFromCart={(id) => removeFromCart(id)} 
        changeQuantity={(id, quantity) => changeQuantity(id, quantity)} 
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="subtotalContainer">
              <div className="subtotalLine">
                Subtotal: <span className="value">$ {finalSubtotal()}</span>
              </div>
              <form className="addCouponCode" onSubmit={onCouponSubmit}>
                <input 
                  className="couponInput" 
                  type="text" 
                  placeholder="Have a Coupon Code?" 
                  ref={node => couponInput = node} 
                  style={discountCoupon.code ? {border: "2px solid #27ae60", borderRight: "none"} : {}}
                />
                <button 
                  type="submit" 
                  className="couponCodeSubmit backgroundBtn" 
                >
                  <FontAwesomeIcon icon="arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link to={"checkout"} 
              className="checkoutBtn" 
              onClick={cartItems.length ? (subtotal) => toCheckout(parseFloat(finalSubtotal())) : (event) => event.preventDefault()}
            >
              <button className={`${cartItems.length ? "" : "inactive"} backgroundBtn`}>
                <FontAwesomeIcon icon="angle-double-right" />
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;