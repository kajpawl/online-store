import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product/Product';
import NoMatch from '../components/NoMatch/NoMatch';
import { getProduct } from '../actions/products-actions';
import { addToCart } from '../actions/cart-actions';

class ProductContainer extends Component {
	componentDidMount() {
		this.props.getProduct(this.props.match.params.id);
		window.scrollTo(0, 0);
	};

	render() {
		const {selectedProduct, addToCart, match} = this.props;
		if (selectedProduct) {
			return (
				<div>
					<Product product={selectedProduct} matchId={match.params.id} addToCart={(id) => addToCart(id)} />
				</div>
			)
		}
		else {
			return <NoMatch />
		}
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