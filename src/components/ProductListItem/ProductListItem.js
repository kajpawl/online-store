import React from 'react';
import './ProductListItem.scss';

const ProductListItem = props => (
	<div>
		<img alt="ProductListItem" src="" />
		<h3>{props.product.name}</h3>
		<label>{props.product.price} zł</label>
		{props.product.promoted ? <div>
			<div>old price: {props.product.oldPrice} zł</div> 
			<div className="promotedTag">Promoted item</div>
		</div> : ""}
		{props.product.stock === 1 ? <div className="lastInStock">
			Last in stock!
		</div> : ""}
	</div>
);

export default ProductListItem;