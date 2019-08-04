import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout/Checkout';
import CheckoutConfirm from '../components/CheckoutConfirm/CheckoutConfirm';
import { onCheckout } from '../actions/cart-actions';

class CheckoutContainer extends Component {
  
  renderProductlist() {
    const { checkoutData } = this.props;
    return checkoutData.cartItems ? (
      <tbody>
        {checkoutData.cartItems.map((product, index) => {
          return (
            <tr key={index}>
              <td className="checkoutItemName">{product.item.name}</td>
              <td className="checkoutItemPrice">$ {product.item.price.toFixed(2)}</td>
              <td className="checkoutItemQuantity">{product.quantity}</td>
              <td className="checkoutItemTotal">$ {(product.quantity * product.item.price).toFixed(2)}</td>
            </tr>
          )
        })}
      </tbody>
    ) : ('');
  }

  render() {
    const { checkoutData, onCheckout, location } = this.props;
    switch (location.pathname) {
      case "/checkout/confirm":
        return (
          <CheckoutConfirm 
            checkoutData={checkoutData}
            renderProductlist={this.renderProductlist()}
          />
        )

      default:
        return (
          <Checkout 
            checkoutData={checkoutData}
            renderProductlist={this.renderProductlist()}
            onCheckout={() => onCheckout()}
          />
        )
    };
  };
};

const mapStateToProps = store => ({
  cartItems: store.cartReducer.cartItems,
  checkoutData: store.cartReducer.checkoutData,
});

const mapDispatchToProps = dispatch => ({
  onCheckout: () => dispatch(onCheckout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);