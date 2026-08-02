import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: cart,
  initialState: [],
  reducers: {
    addToCart: () => {},
    editCartItem: () => {},
    removeCartItem: () => {},
    clearCart: () => {},
  },
});

export const { addToCart, editCartItem, removeCartItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
