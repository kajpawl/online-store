import React from 'react';
import { Link } from 'react-router-dom';
import CartProductList from '../CartProductList/CartProductList';
import './Cart.scss';

const Cart = props => {
  const { cartItems, removeFromCart, changeQuantity, useCoupon, discountCoupon, coupons, shippingCost } = props;

  let subtotalValues = [];
  const reducedSubtotal = () => {
    cartItems.map(cartItem => subtotalValues.push(cartItem.quantity * cartItem.item.price));
    function sum(x, y) {
      return x + y;
    };
    return subtotalValues.length !== 0 ? subtotalValues.reduce(sum) : 0;
  };

  const finalSubtotal = () => {
    if (discountCoupon.type === "minus") {
      return (reducedSubtotal() - discountCoupon.value).toFixed(2);
    }
    else if (discountCoupon.type === "percent") {
      return (reducedSubtotal() - (reducedSubtotal() * (discountCoupon.value / 100))).toFixed(2);
    }
    else if (discountCoupon.type === "shipping") {
  //    freeShipping = true;
      return (reducedSubtotal()).toFixed(2);
    }
    else {
      return (reducedSubtotal()).toFixed(2);
    };
  };



//  THIS NEEDS TO BE ISOLATED AS A CONTAINER: CouponInputContainer


  let couponInput = null;

  const onCouponSubmit = event => {
    event.preventDefault();
    props.useCoupon(couponInput.value)
  };


//  END OF THE COUPONINPUTCONTAINER



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
          <b>Subtotal:</b> <span className="value">{finalSubtotal()} zł</span>
        </div>
        <form className="addCouponCode" onSubmit={onCouponSubmit}>
          <p>Have a Coupon Code?</p>
          <input className="couponInput" type="text" placeholder="Insert code" ref={node => couponInput = node} />
          <input type="submit" className="couponCodeSubmit" value="Submit" />
        </form>
      </div>
      <button className="checkoutButton">Proceed to checkout</button>
    </div>
  );
};

export default Cart;