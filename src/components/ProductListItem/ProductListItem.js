import React from 'react';
import './ProductListItem.scss';

const ProductListItem = props => (
	<div>
		<div>
			<img src={require(`../../images/${props.product.imgs}`)} alt="ProductListItem" />
		</div>
		<h3>{props.product.name}</h3>
		<label>$ {props.product.price}</label>
		{props.product.promoted ? <div>
			<div>old price: $ {props.product.oldPrice}</div> 
			<div className="promotedTag">Promoted item</div>
		</div> : ""}
		{props.product.stock === 1 ? <div className="lastInStock">
			Last in stock!
		</div> : ""}
	</div>
);

export default ProductListItem;