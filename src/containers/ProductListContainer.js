import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';
import SortingPanel from '../components/SortingPanel/SortingPanel';
import PaginationPanel from '../components/PaginationPanel/PaginationPanel';
import { getProducts, sortProducts, getCategory, searchProducts, getProduct, changeProductPage } from '../actions/products-actions';
import { addToCart } from '../actions/cart-actions';
import './ProductListContainer.scss';

class ProductListContainer extends Component {

  //  constructor is used ONLY to tell React Transition Group when to update
  constructor() {
    super();
    this.state = {
      updateProductList: 1
    };
  }
  
  // For mobile devices: dislplay button for toggling visibility of sortinng panel
  componentDidMount() {
    const { getProducts, searchProducts } = this.props;
    getProducts();
    searchProducts('');

    const filterButton = document.getElementById('filterButton');
    const sortingPanel = document.getElementById('sortingPanel').classList;
    filterButton.classList.add('visible');
    filterButton.addEventListener('click', () => {
      filterButton.classList.toggle('active');
      sortingPanel.toggle('active');
      if (sortingPanel.contains('active')) this.pageScrollUp();
    });
  }

  componentWillUnmount() {
    const filterButtonClass = document.getElementById('filterButton').classList;
    filterButtonClass.remove('visible');
    if (filterButtonClass.contains('active')) filterButtonClass.remove('active');
  }

  //  Display products of chosen category (if none is chosen, display all products)
  getProductsForPage() {
    const { shownProducts, productsPerPage, currentPage, shownCategory } = this.props;
    const lastShownProductIndex = currentPage * productsPerPage;
    const firstShownProductIndex = lastShownProductIndex - productsPerPage;
    return shownCategory !== 'All' ?
      shownProducts.filter(product => {
        return product.category === shownCategory
      }).slice(firstShownProductIndex, lastShownProductIndex)
    :
      shownProducts.slice(firstShownProductIndex, lastShownProductIndex);
  }

  //  Scroll to the top on viewing next page of products
  pageScrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.setState({
      updateProductList: Math.random()
    });
  }

  //  Render buttons for pagination according to the number of displayed products
  renderPaginationButtons() {
    const { shownProducts, shownCategory, productsPerPage, currentPage, changeProductPage } = this.props;
    let paginationButtons = [];
    for (let i = 0; i < ((shownCategory === 'All' ? shownProducts.length : shownProducts.filter(product => product.category === shownCategory).length) / productsPerPage); i++) {
      paginationButtons.push(<li key={i} className={`paginationButton ${i + 1 === currentPage ? 'active' : ''}`} onClick={() => {this.pageScrollUp(); changeProductPage(i + 1)}}>{i + 1}</li>);
    };
    return paginationButtons;
  }

  render() {
    const { shownCategory, searchProducts, sortProducts, getCategory, getProduct, addToCart, currentPage, changeProductPage, cartItems } = this.props;
    return (
      <div className="productListContainer">
        <div className="mainContent container">
          <div className="row">
            <SortingPanel 
              sortProducts={(sortingType) => {this.pageScrollUp(); sortProducts(sortingType)}} 
              getCategory={(category) => {this.pageScrollUp(); getCategory(category)}}
              getAll={() => searchProducts('')}
              shownCategory={shownCategory}
            />
            <ProductList 
              products={this.getProductsForPage()} 
              getProduct={(id) => getProduct(id)} 
              addToCart={(id) => addToCart(id)} 
              cartItems={cartItems}
              updateProducts={this.state.updateProductList}
            />
          </div>
          <PaginationPanel 
            changePageNumber={(targetNumber) => changeProductPage(targetNumber)} 
            currentPage={currentPage} 
            renderPaginationButtons={this.renderPaginationButtons()} 
            pageScrollUp={() => this.pageScrollUp()}
          />
        </div>
      </div>
    );
  };
};

const mapStateToProps = store => ({
  products: store.productsReducer.products,
  shownProducts: store.productsReducer.shownProducts,
  shownCategory: store.productsReducer.shownCategory,
  searchText: store.productsReducer.searchText,
  currentPage: store.productsReducer.currentPage,
  productsPerPage: store.productsReducer.productsPerPage,
  cartItems: store.cartReducer.cartItems
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