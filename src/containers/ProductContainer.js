import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product/Product';
import { getProduct } from '../actions/products-actions';
import { addToCart } from '../actions/cart-actions';

class ProductContainer extends Component {

	componentDidMount() {
		this.props.getProduct(this.props.match.params.id);
	}

	render() {
		const {selectedProduct, addToCart} = this.props;
		return (
			<div>
				<Product product={selectedProduct} addToCart={(id) => addToCart(id)} />
			</div>
		)
	}
};

const mapStateToProps = store => ({
	selectedProduct: store.productsReducer.selectedProduct,
});

const mapDispatchToProps = dispatch => ({
	getProduct: (id) => dispatch(getProduct(id)),
	addToCart: (id) => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);