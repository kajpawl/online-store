import React from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";		
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductListItem.scss';

const ProductListItem = props => (
	<div className="col-12 col-md-6 productListItemWrapper">
		<div className="fadeWrapper">
			<TransitionGroup>
	      <CSSTransition
	        key={props.updateProducts}
	        classNames="fade"
	        timeout={200}
	      >
      		<div>
						<div className="productListItem">
							<Link className="miniature" to={"products/" + props.product.id}>
								<div className="thumbnail">
									{props.product.promoted ? <div>
										<div className="promotedItem">Promoted</div>
									</div> : ""}
									{props.product.stock === 1 ? <div className="lastItem">
										Last item
									</div> : ""}
									<img className="productListItemImage" src={require(`../../images/${props.product.imgs}`)} alt="ProductListItem" />
								</div>
							</Link>
							<div className="productListItemLabel">
								<Link className="miniature" to={"products/" + props.product.id}>
									<h3><span>{props.product.name}</span></h3>
								</Link>
								<label className="currentPrice">$ {props.product.price}</label>
								{props.product.promoted ?
									<label className="oldPrice">old price: <span>$ {props.product.oldPrice}</span></label> 
								: ""}
								<button className="addToCart" onClick={(id) => (props.addToCart(props.product.id))}>
									{props.cartItems.find(product => product.item === props.product) ? 
										<span>
											<FontAwesomeIcon icon="check-circle" />
											In cart ({props.cartItems.find(product => product.item === props.product).quantity})
										</span> 
									:
										<span>
											<FontAwesomeIcon icon="cart-arrow-down" />
											Add to cart
										</span>
									}
								</button>
							</div>
						</div>
					</div>
    	  </CSSTransition>
			</TransitionGroup>
		</div>
	</div>
);

export default ProductListItem;