import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import SortingPanel from '../components/SortingPanel/SortingPanel';
import { getProducts, sortProducts, getCategory, searchProducts, getProduct } from '../actions/products-actions';
import { addToCart } from '../actions/cart-actions';

class ProductListContainer extends Component {
	componentDidMount() {
		const { getProducts, searchProducts } = this.props;
		getProducts();
		searchProducts('');
	}

	render() {
		const { searchProducts, sortProducts, getCategory, shownProducts, getProduct, addToCart } = this.props;
		return (
			<div>
				<div className="search">
					<input type="text" onChange={(e) => searchProducts(e.target.value)} />
				</div>
				<SortingPanel sortProducts={(sortingType) => sortProducts(sortingType)} />
				<ProductList products={shownProducts} getProduct={(id) => getProduct(id)} addToCart={(id) => addToCart(id)} />
			</div>
		)
	}
};

const mapStateToProps = store => ({
	products: store.productsReducer.products,
	shownProducts: store.productsReducer.shownProducts,
	searchText: store.productsReducer.searchText,
});

const mapDispatchToProps = dispatch => ({
	getProducts: () => dispatch(getProducts()),
	sortProducts: sortingType => dispatch(sortProducts(sortingType)),
	getCategory: category => dispatch(getCategory(category)),
	searchProducts: searchText => dispatch(searchProducts(searchText)),
	getProduct: id => dispatch(getProduct(id)),
	addToCart: id => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);