import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY, USE_COUPON, TO_CHECKOUT } from '../actions/cart-actions';
import productsData from '../data/products.json';
import couponsData from '../data/coupons.json';

const shippingPrice = 9;
const initialState = {
  products: productsData,
  coupons: couponsData,
  discountCoupon: {},
  cartItems: [
{
  item: {
    category: "Abstract",
    dateAdded: "2018-06-21",
    description: "<p>This beautiful and functional board has room for two teams of large marbles. Players take turns pushing the marbles around the board, with the goal of pushing six of the opposing player's marbles off the board. The central idea is that a column of marbles has weight given by the number of marbles in line. Someone will need to push with a heavier group of marbles in order to push the column along that axis. However, with six possible directions, it's difficult to defend yourself perfectly. Also, it's possible to play the game with up to six players when supplemental marble sets are purchased.</p>",
    id: "2",
    imgs: "3.jpg",
    name: "Abalone",
    oldPrice: 34.99,
    price: 34.99,
    promoted: false,
    stock: 1
  },
  quantity: 1
},
{
  item: {
    category: "Strategy",
    dateAdded: "2018-06-21",
    description: "<p>This beautiful and functional board has room for two teams of large marbles. Players take turns pushing the marbles around the board, with the goal of pushing six of the opposing player's marbles off the board. The central idea is that a column of marbles has weight given by the number of marbles in line. Someone will need to push with a heavier group of marbles in order to push the column along that axis. However, with six possible directions, it's difficult to defend yourself perfectly. Also, it's possible to play the game with up to six players when supplemental marble sets are purchased.</p>",
    id: "3",
    imgs: "4.jpg",
    name: "Robert",
    oldPrice: 34.99,
    price: 34.99,
    promoted: false,
    stock: 1
  },
  quantity: 1
}
  ],
  checkoutData: {},
  shippingCost: shippingPrice
};

const cartReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cartItems.find(product => (product.item.id === action.id) && (product.item.stock <= product.quantity))) {
        window.alert('Number of items in stock exceded!');
        return state;
      } 
      else if (state.cartItems.find(product => product.item.id === action.id)) {
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
      if (state.cartItems.find(product => (product.item.id === action.id) && (product.item.stock < action.quantity))) {
        window.alert('Number of items in stock exceded!');
        const changedCartItems = state.cartItems.map(product => product.item.id === action.id ? Object.assign({}, product, {quantity: product.item.stock}) : product);
        return Object.assign({}, state, {cartItems: changedCartItems});
      }
      else if (action.quantity <= 0) {
        return state;
      }
      else {
        const changedCartItems = state.cartItems.map(product => product.item.id === action.id ? Object.assign({}, product, {quantity: action.quantity}) : product);
        return Object.assign({}, state, {cartItems: changedCartItems});
      }

    case USE_COUPON:
      if (state.coupons.find(coupon => coupon.code === action.couponCode)) {
        const usedCoupon = state.coupons.find(coupon => coupon.code === action.couponCode);
        return Object.assign({}, state, {discountCoupon: usedCoupon});
      }
      else {
        return state;
      }

    case TO_CHECKOUT:
      const checkoutData = {
        shippingPrice: state.discountCoupon.type === 'shipping' || action.subtotal > 250 ? 0 : state.shippingCost,
        cartItems: state.cartItems,
        discountCoupon: state.discountCoupon,
        subtotal: action.subtotal
      }
      return Object.assign({}, state, {checkoutData});




    default:
      return state;
  };
};

export default cartReducer;