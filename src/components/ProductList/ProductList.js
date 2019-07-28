import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.scss';

const ProductList = props => (
	<div className="productList row">
		{props.products.map(product => {
			return (
				<ProductListItem key={product.id} product={product} addToCart={props.addToCart} cartItems={props.cartItems} />
			)
		})}
	</div>
);

export default ProductList;