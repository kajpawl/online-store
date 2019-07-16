import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart';
import { removeFromCart, changeQuantity, useCoupon, confirmOrder } from '../actions/cart-actions';

class CartContainer extends Component {
	render() {
		const { cartItems, removeFromCart, changeQuantity, useCoupon, confirmOrder, coupons, discountCoupon, shippingCost } = this.props;
		return (
			<Cart 
				cartItems={cartItems} 
				removeFromCart={(id) => removeFromCart(id)} 
				changeQuantity={(id, quantity) => changeQuantity(id, quantity)} 
				useCoupon={(couponCode) => useCoupon(couponCode)} 
				confirmOrder={() => confirmOrder()}
				coupons={coupons}
				discountCoupon={discountCoupon}
				shippingCost={shippingCost}
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
	confirmOrder: () => dispatch(confirmOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);