import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import SortingPanel from '../components/SortingPanel/SortingPanel';
import PaginationPanel from '../components/PaginationPanel/PaginationPanel';
import { getProducts, sortProducts, getCategory, searchProducts, getProduct, changeProductPage } from '../actions/products-actions';
import { addToCart } from '../actions/cart-actions';

class ProductListContainer extends Component {
	componentDidMount() {
		const { getProducts, searchProducts } = this.props;
		getProducts();
		searchProducts('');
	}

	getProductsForPage() {
		const { shownProducts, productsPerPage, currentPage } = this.props;
		const lastShownProductIndex = currentPage * productsPerPage;
		const firstShownProductIndex = lastShownProductIndex - productsPerPage;
		return shownProducts.slice(firstShownProductIndex, lastShownProductIndex);
	}

	renderPaginationButtons() {
		const { shownProducts, productsPerPage, currentPage, changeProductPage } = this.props;
		let paginationButtons = [];
		for (let i = 0; i < (shownProducts.length / productsPerPage); i++) {
			paginationButtons.push(<li key={i} className={`paginationButton ${i + 1 === currentPage ? 'active' : ''}`} onClick={() => changeProductPage(i + 1)}>{i + 1}</li>);
		};
		return paginationButtons;
	}

	render() {
		const { searchProducts, sortProducts, getCategory, shownProducts, getProduct, addToCart, productsPerPage, currentPage, changeProductPage } = this.props;
		return (
			<div className="productListContainer">
				<div className="search">
					<input type="text" onChange={(e) => searchProducts(e.target.value)} />
				</div>
				<SortingPanel sortProducts={(sortingType) => sortProducts(sortingType)} />
				<ProductList products={this.getProductsForPage()} getProduct={(id) => getProduct(id)} addToCart={(id) => addToCart(id)} />
				<PaginationPanel changePageNumber={(targetNumber) => changeProductPage(targetNumber)} currentPage={currentPage} renderPaginationButtons={this.renderPaginationButtons()} />
			</div>
		)
	}
};

const mapStateToProps = store => ({
	products: store.productsReducer.products,
	shownProducts: store.productsReducer.shownProducts,
	searchText: store.productsReducer.searchText,
	currentPage: store.productsReducer.currentPage,
	productsPerPage: store.productsReducer.productsPerPage
});

const mapDispatchToProps = dispatch => ({
	getProducts: () => dispatch(getProducts()),
	sortProducts: sortingType => dispatch(sortProducts(sortingType)),
	getCategory: category => dispatch(getCategory(category)),
	searchProducts: searchText => dispatch(searchProducts(searchText)),
	getProduct: id => dispatch(getProduct(id)),
	addToCart: id => dispatch(addToCart(id)),
	changeProductPage: targetPage => dispatch(changeProductPage(targetPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);