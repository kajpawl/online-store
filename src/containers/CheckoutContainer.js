import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout/Checkout';
import CheckoutBillingDetails from '../components/CheckoutBillingDetails/CheckoutBillingDetails';
import CheckoutConfirm from '../components/CheckoutConfirm/CheckoutConfirm';
// import { toCheckout } from '../actions/cart-actions';

class CheckoutContainer extends Component {
  renderProductlist() {
    const { checkoutData } = this.props;
    return checkoutData.cartItems ? (
      <tbody>
        {checkoutData.cartItems.map((product, index) => {
          return (
            <tr key={index}>
              <td>{product.item.name}</td>
              <td>$ {product.item.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>$ {(product.quantity * product.item.price).toFixed(2)}</td>
            </tr>
          )
        })}
      </tbody>
    ) : ('');
  }

	render() {
		const { checkoutData, userData, location } = this.props;
    switch (location.pathname) {
		  case "/checkout/billing":
        return (
          <CheckoutBillingDetails 
            userData={userData}
          />
        )

      case "/checkout/confirm":
        return (
          <CheckoutConfirm 
            checkoutData={checkoutData}
            userData={userData}
            renderProductlist={this.renderProductlist()}
          />
        )

      default:
        return (
    			<Checkout 
    				checkoutData={checkoutData}
            renderProductlist={this.renderProductlist()}
    			/>
    		)
    }
	}
};

const mapStateToProps = store => ({
	checkoutData: store.cartReducer.checkoutData,
  userData: store.cartReducer.userData
});

const mapDispatchToProps = dispatch => ({
	// removeFromCart: id => dispatch(removeFromCart(id)),
	// changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity)),
	// useCoupon: couponCode => dispatch(useCoupon(couponCode)),
	// toCheckout: () => dispatch(toCheckout())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);