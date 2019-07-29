import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.scss';

const Product = props => (
  <main className="productPage">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-5">
          <div className="productImage">
            {props.product.promoted ? <div>
              <div className="promotedItem">Promoted</div>
            </div> : ""}
            {props.product.stock === 1 ? <div className="lastItem">
              Last item
            </div> : ""}
            <img src={require(`../../images/${props.matchId}.jpg`)} alt={`${props.product.name} cover`} />
          </div>
        </div>
        <div className="descriptionContainer col-12 col-sm-7">
          <div className="basicInfo">
            <h2>{props.product.name}</h2>
            <div className="row">
              <div className="col-6">
                <label className="priceLabel">Price: <span>$ {props.product.price}</span></label>
                {props.product.promoted === true ? <label className="oldPriceLabel">Old price: <span>$ {props.product.oldPrice}</span></label> : ""}
                <label className="stockLabel">In stock: <span>{props.product.stock}</span></label>
              </div>
              <div className="col-6">
                <button className="backgroundBtn" onClick={() => props.addToCart(props.product.id)}>
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
          <div className="productDescription paragraphBox">
            <h3>Description:</h3>
            <div className="descriptionText" dangerouslySetInnerHTML={{__html: props.product.description}} />
          </div>
          <Link to={"../products"} className="backToShopping">
            <button className="backgroundBtn">
              <FontAwesomeIcon icon="angle-double-left" />
              Back to shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  </main>
);

export default Product;