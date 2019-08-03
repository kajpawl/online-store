import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../Spinner/Spinner';
import './ProductListItem.scss';

class ProductListItem extends Component {

  constructor() {
    super();
    this.state = {isLoading: true};
  }

  checkLoad() {
    return this.state.isLoading ? <Spinner /> : <div />;
  }

  render() {
    const { updateProducts, product, addToCart, cartItems } = this.props;
    return (
      <div className="col-12 col-md-6 productListItemWrapper">
        <div className="fadeWrapper">
          <TransitionGroup>
            <CSSTransition
              key={updateProducts}
              classNames="fade"
              timeout={200}
            >
              <div>
                <div className="productListItem">
                  <Link className="miniature" to={"products/" + product.id}>
                    <div className="thumbnail">
                      {product.promoted ? <div>
                        <div className="promotedItem">Promoted</div>
                      </div> : ""}
                      {product.stock === 1 ? <div className="lastItem">
                        Last item
                      </div> : ""}
                      {this.checkLoad()}
                      <img className="productListItemImage" src={require(`../../images/${product.imgs}`)} alt="ProductListItem" onLoad={() => this.setState({isLoading: false})} />
                    </div>
                  </Link>
                  <div className="productListItemLabel">
                    <Link className="miniature" to={"products/" + product.id}>
                      <h3><span>{product.name}</span></h3>
                    </Link>
                    <label className="currentPrice">$ {product.price}</label>
                    {product.promoted ?
                      <label className="oldPrice">old price: <span>$ {product.oldPrice}</span></label> 
                    : ""}
                    <button className="addToCart" onClick={(id) => (addToCart(product.id))}>
                      {cartItems.find(foundProduct => foundProduct.item === product) ? 
                        <span>
                          <FontAwesomeIcon icon="check-circle" />
                          In cart ({cartItems.find(foundProduct => foundProduct.item === product).quantity})
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
  }
}

export default ProductListItem;