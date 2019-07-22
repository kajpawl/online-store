import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.scss';

const Checkout = props => {
  const { checkoutData, renderProductlist } = props;
  return checkoutData.cartItems ? (
    <div className="checkout">
      <div className="checkoutData">
        <div className="checkoutProductList">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            {renderProductlist}
            <tfoot>
              <tr>
                <td><i>Subtotal:</i></td>
                <td></td>
                <td></td>
                <td>
                  <span className="value">$ {checkoutData.subtotal}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="checkoutShipping">
          <i>+ ${checkoutData.shippingPrice.toFixed(2)} for priority shipping</i>
        </div>
        <div className="checkoutCouponCode">
          <b>Coupon Code:</b> <span className="value">{checkoutData.discountCoupon ? checkoutData.discountCoupon.code : "No coupon used"}</span>
        </div>
        <div className="checkoutToPay">
          <b>To Pay:</b> <span className="value">$ {(checkoutData.subtotal + checkoutData.shippingPrice).toFixed(2)}</span>
        </div>
      </div>
      <Link to={"checkout/billing"} className="billingDetails">
        Billing details
      </Link>
      <Link to={"cart"} className="backToCart">
        Back to cart
      </Link>
    </div>
  ) : (<div className="emptyOrder">Your order is empty</div>);
};

export default Checkout;