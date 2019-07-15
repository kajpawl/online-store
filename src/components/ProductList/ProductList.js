import React from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.scss';

const ProductList = props => (
	<div className="products-list">
		{props.products.map(product => {
			return (
				<div className="product-list-item" key={product.id}>
					<Link className="miniature" to={"products/" + product.id}>
						<ProductListItem key={product.id} product={product} />
					</Link>
					<button onClick={(id) => (props.addToCart(product.id))}>Add to cart</button>
				</div>
			)
		})}
	</div>
);

export default ProductList;