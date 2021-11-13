import { ADD_ITEM, REMOVE_ITEM } from "../actions/cartActions";

const initialState = {
  cartItems: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.isbn13 !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default CartReducer;
