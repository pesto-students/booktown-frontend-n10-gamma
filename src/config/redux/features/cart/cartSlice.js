import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToCart,
  removeItemFromCart,
  removeUserCartItems
} from './cart.utils';
const namespace = 'cart';
const initialState = {
  cartItems: {},
  loading: false
};
export const cartSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    deleteUserCart: (state, action) => {
      state.cartItems = removeUserCartItems(state.cartItems, action.payload);
    }
  }
});
// Action creators are generated for each case reducer function
export const { deleteUserCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
