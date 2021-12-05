import { createSlice } from '@reduxjs/toolkit';
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
      state.cartItems = action.payload;
    },
    removeItem: (state, action) => {
      state.cartItems = action.payload;
    }
  }
});
// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
