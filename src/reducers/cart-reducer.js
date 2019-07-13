import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY, USE_COUPON, CONFIRM_ORDER } from '../actions/cart-actions';
import productsData from '../data/products.json';
import couponsData from '../data/coupons.json';

const shippingPrice = 12.50;
const initialState = {
  products: productsData,
  coupons: couponsData,
  discountCoupon: {},
  cartItems: [],
  checkoutData: {},
  shippingCost: shippingPrice
};

const cartReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cartItems.find(product => product.item.id === action.id)) {
        const updatedCartItems = state.cartItems.map(product => product.item.id === action.id ? Object.assign({}, product, {quantity: ++product.quantity}) : product);
        return Object.assign({}, state, {cartItems: updatedCartItems});
      } 
      else {
        const addedItem = {
          quantity: 1,
          item: state.products.find(product => product.id === action.id)
        };
        const updatedCartItems = [...state.cartItems, addedItem];
        return Object.assign({}, state, {cartItems: updatedCartItems});
      };

    case REMOVE_FROM_CART:
      const updatedCartItems = state.cartItems.filter(product => product.item.id !== action.id);
      return Object.assign({}, state, {cartItems: updatedCartItems});

    case CHANGE_QUANTITY:
      const changedCartItems = state.cartItems.map(product => product.item.id === action.id ? Object.assign({}, product, {quantity: action.quantity}) : product);
      return Object.assign({}, state, {cartItems: changedCartItems});

    case USE_COUPON:
      const usedCoupon = state.coupons.find(coupon => coupon.code === action.couponCode);
      return Object.assign({}, state, {discountCoupon: usedCoupon});

    default:
      return state;
  };
};

export default cartReducer;