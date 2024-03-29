import { GET_PRODUCTS, SORT_PRODUCTS, GET_CATEGORY, SEARCH_PRODUCTS, GET_PRODUCT, CHANGE_PRODUCT_PAGE } from '../actions/products-actions';
import productsData from '../data/products.json';

const initialState = {
  products: productsData,
  selectedProduct: {},
  shownProducts: [],
  shownCategory: 'All',
  searchText: '',
  currentPage: 1,
  productsPerPage: 6
};

const productsReducer = function(state = initialState, action) {
  let foundProducts = state.products;
  const findProducts = (searchText) => state.products.filter(product => product.name.toLowerCase().includes(searchText));

  switch (action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, {products: state.products});

    case SORT_PRODUCTS:
      let sortedProducts = null;
      function fromAToZ(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        let comparison = 0;
        nameA > nameB ? comparison = 1 : comparison = -1;
        return comparison
      };
      function lowToHigh(a, b) {
        let comparison = 0;
        a.price > b.price ? comparison = 1 : comparison = -1;
        return comparison
      };
      switch (action.sortingType) {
        case "fromAToZ":
          sortedProducts = state.products.sort(fromAToZ);
          foundProducts = findProducts(state.searchText);
          return Object.assign({}, state, {products: sortedProducts, shownProducts: foundProducts, currentPage: 1});

        case "fromZToA":
          sortedProducts = state.products.sort(fromAToZ).reverse();
          foundProducts = findProducts(state.searchText);
          return Object.assign({}, state, {products: sortedProducts, shownProducts: foundProducts, currentPage: 1});

        case "lowToHigh":
          sortedProducts = state.products.sort(lowToHigh);
          foundProducts = findProducts(state.searchText);
          return Object.assign({}, state, {products: sortedProducts, shownProducts: foundProducts, currentPage: 1});

        case "highToLow":
          sortedProducts = state.products.sort(lowToHigh).reverse();
          foundProducts = findProducts(state.searchText);
          return Object.assign({}, state, {products: sortedProducts, shownProducts: foundProducts, currentPage: 1});

        default:
          return state;
      };

    case GET_CATEGORY:
      return Object.assign({}, state, {shownCategory: action.category, currentPage: 1});

    case SEARCH_PRODUCTS:
      const newSearchText = action.searchText.toLowerCase();
      foundProducts = findProducts(newSearchText);
      return Object.assign({}, state, {searchText: newSearchText, shownProducts: foundProducts, currentPage: 1});

    case GET_PRODUCT:
      const selectedProduct = state.products.find(product => product.id === action.id);
      return Object.assign({}, state, {selectedProduct});

    case CHANGE_PRODUCT_PAGE:
      const targetPage = action.targetPage;
      return targetPage <= 0 || targetPage > Math.ceil(state.shownProducts.length / state.productsPerPage) ? state : Object.assign({}, state, {currentPage: targetPage});

    default:
      return state;
  };
};

export default productsReducer;