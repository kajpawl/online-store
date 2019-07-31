import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Checkout/Checkout.scss';
import './CheckoutConfirm.scss';

const CheckoutConfirm = props => {
  const { checkoutData, userData, renderProductlist } = props;
  return (
    <main className="checkout checkoutConfirm container">
      {checkoutData.cartItems ? 
        <div>
          <div className="row">
            <div className="col-12">
              <h2>Order confirmed</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 paragraphContainer">
              <p>Thank you for your order! It's already on the way and should reach you soon. You can see the details of your order below.</p>
              <p>We are proud you trusted us and hope to see you back in the near future!</p>
            {/*  <div className="userData">
                <h3>userData.name userData.surname</h3>
                <h4>Address</h4>
                <p>userData.address</p>
                <p>userData.zipCode userData.city</p>
                <p>userData.country</p>
              </div> */}
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
                      <td>Shipping:</td>
                      <td></td>
                      <td></td>
                      <td>$ {checkoutData.shippingPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td><i>Total:</i></td>
                      <td></td>
                      <td></td>
                      <td>
                        <span className="value">$ {(checkoutData.subtotal + checkoutData.shippingPrice).toFixed(2)}</span>
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
                <Link to={"/"} className="confirmBtn">
                  <button className="backgroundBtn">
                    <FontAwesomeIcon icon="angle-double-right" />
                    Back to shop
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
  )
};

export default CheckoutConfirm;