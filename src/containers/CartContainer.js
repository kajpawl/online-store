import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart';
import { removeFromCart, changeQuantity, useCoupon, toCheckout } from '../actions/cart-actions';

class CartContainer extends Component {

  reducedSubtotal = () => {
	  const { cartItems } = this.props;
		let subtotalValues = [];
    cartItems.map(cartItem => subtotalValues.push(cartItem.quantity * cartItem.item.price));
    function sum(x, y) {
      return x + y;
    };
    return subtotalValues.length !== 0 ? subtotalValues.reduce(sum) : 0;
  };

  finalSubtotal = () => {
 		const { cartItems, discountCoupon } = this.props;
 		const { reducedSubtotal } = this;

    if (discountCoupon.type === "minus") {
      return (reducedSubtotal() - discountCoupon.value).toFixed(2);
    }
    else if (discountCoupon.type === "percent") {
      return (reducedSubtotal() - (reducedSubtotal() * (discountCoupon.value / 100))).toFixed(2);
    }
    else {
      return (reducedSubtotal()).toFixed(2);
    };
  };

	render() {
		const { cartItems, removeFromCart, changeQuantity, useCoupon, toCheckout, coupons, discountCoupon, shippingCost } = this.props;
		return (
			<Cart 
				cartItems={cartItems} 
				removeFromCart={(id) => removeFromCart(id)} 
				changeQuantity={(id, quantity) => changeQuantity(id, quantity)} 
				useCoupon={(couponCode) => useCoupon(couponCode)} 
				toCheckout={(subtotal) => toCheckout(subtotal)}
				coupons={coupons}
				discountCoupon={discountCoupon}
				shippingCost={shippingCost}
				finalSubtotal={this.finalSubtotal}
			/>
		)
	}
};

const mapStateToProps = store => ({
	cartItems: store.cartReducer.cartItems,
	coupons: store.cartReducer.coupons,
	discountCoupon: store.cartReducer.discountCoupon,
	checkoutData: store.cartReducer.checkoutData,
	shippingCost: store.cartReducer.shippingCost
});

const mapDispatchToProps = dispatch => ({
	removeFromCart: id => dispatch(removeFromCart(id)),
	changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity)),
	useCoupon: couponCode => dispatch(useCoupon(couponCode)),
	toCheckout: subtotal => dispatch(toCheckout(subtotal))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);