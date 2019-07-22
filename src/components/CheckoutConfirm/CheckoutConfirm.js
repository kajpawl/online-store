import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutConfirm.scss';

const CheckoutConfirm = props => {
  const { checkoutData, userData, renderProductlist } = props;
  return checkoutData.cartItems ? (
    <div className="checkoutConfirm">
      <h2>Thank you for your order!</h2>
      <p>See the details of your order below</p>
      <div className="userData">
        <h3>userData.name userData.surname</h3>
        <h4>Address</h4>
        <p>userData.address</p>
        <p>userData.zipCode userData.city</p>
        <p>userData.country</p>
      </div>
      <div className="productList">
        <h3>Your order</h3>
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
        <div className="checkoutShipping">
          <i>+ ${checkoutData.shippingPrice.toFixed(2)} for priority shipping</i>
        </div>
      </div>
      <Link to={""} className="backToShop">
        Back to shop
      </Link>
    </div>
  ) : (<div className="emptyOrder">Your order is empty</div>);
};

export default CheckoutConfirm;