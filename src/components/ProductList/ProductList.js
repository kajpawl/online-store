import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.scss';

const ProductList = props => (
	<main className="productList row">
		{props.products.map(product => {
			return (
				<ProductListItem key={product.id} product={product} addToCart={props.addToCart} cartItems={props.cartItems} />
			)
		})}
	</main>
);

export default ProductList;