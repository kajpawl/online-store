import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../Spinner/Spinner';
import './Product.scss';

class Product extends Component {

  //  Constructor is used ONLY to check if the image has loaded
  constructor() {
    super();
    this.state = {isLoading: true};
  }

  //  Check if the image has loaded
  checkLoad() {
    return this.state.isLoading ? <Spinner /> : <div />;
  }

  render() {
    const { product, matchId, addToCart, cartItems } = this.props;
    return (
      <main className="productPage">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5">
              <div className="productImage">
                {product.promoted ? <div>
                  <div className="promotedItem">Promoted</div>
                </div> : ""}
                {product.stock === 1 ? <div className="lastItem">
                  Last item
                </div> : ""}
                <img src={require(`../../images/${matchId}.jpg`)} alt={`${product.name} cover`} onLoad={() => this.setState({isLoading: false})} />
                {this.checkLoad()}
              </div>
            </div>
            <div className="descriptionContainer col-12 col-sm-7">
              <div className="basicInfo">
                <h2>{product.name}</h2>
                <div className="row">
                  <div className="col-6">
                    <label className="priceLabel">Price:
                      <span>$ {product.price}</span>
                    </label>
                    {product.promoted === true ? <label className="oldPriceLabel">Old price: 
                      <span>$ {product.oldPrice}</span>
                    </label> : ""}
                    <label className="categoryLabel">Category: 
                      <span>{product.category}</span>
                    </label>
                  </div>
                  <div className="col-6">
                    <button className="backgroundBtn" onClick={() => addToCart(product.id)}>
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
                    <label className="stockLabel">In stock: 
                      <span>{product.stock}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="productDescription paragraphBox">
                <h3>Description:</h3>
                <div className="descriptionText" dangerouslySetInnerHTML={{__html: product.description}} />
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
  };
};

export default Product;