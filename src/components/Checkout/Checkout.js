import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Checkout.scss';

const Checkout = props => {
  const { checkoutData, renderProductlist, onCheckout } = props;
  return (
    <main className="checkout container">
      {checkoutData.cartItems ? 
        <div>
          <div className="row">
            <div className="col-12">
              <h2>Checkout</h2>
            </div>
          </div>
          <div className="row">
            <div className="checkoutData col-12">
              <div className="checkoutProductList">
                <table>
                  <thead>
                    <tr>
                      <th className="checkoutItemName">Product</th>
                      <th className="checkoutItemPrice">Price</th>
                      <th className="checkoutItemQuantity">Quantity</th>
                      <th className="checkoutItemTotal">Total</th>
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
              <div className="additionalData">
                {checkoutData.discountCoupon.code !== undefined || false ?
                  <div className="checkoutCouponCode">
                    <b>Coupon Code:</b> 
                    <span className="value">
                      {checkoutData.discountCoupon.code}
                    </span>
                  </div>
                : ""}
                <div className="checkoutShipping">
                  <i>+ ${checkoutData.shippingPrice.toFixed(2)} for priority shipping</i>
                </div>
                <div className="checkoutToPay">
                  <b>To Pay:</b> 
                  <span className="value">
                    $ {(checkoutData.subtotal + checkoutData.shippingPrice).toFixed(2)}
                  </span>
                </div>
                <Link to={"cart"} className="backToCartBtn">
                  <button className="backgroundBtn">
                    <FontAwesomeIcon icon="angle-double-left" />
                    Back to cart
                  </button>
                </Link>
                <Link to={"/checkout/confirm"} className="confirmBtn" onClick={() => onCheckout()}>
                  <button className="backgroundBtn">
                    <FontAwesomeIcon icon="angle-double-right" />
                    Confirm order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      :
        <div className="emptyOrder">Your order is empty</div>
      }
    </main>
  );
};

export default Checkout;