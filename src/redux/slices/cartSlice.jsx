import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restaurantId: null,
    items: [],
  },
  // sample
  //   {
  //     restaurantId:"",
  //     items:[
  //         {
  //             id:"",
  //             qty: 2
  //         },
  //     ]
  //   }
  reducers: {
    addToCart: (state, action) => {
      const { restaurantId, item } = action.payload;

      if (state.restaurantId !== restaurantId) {
        state.restaurantId = restaurantId;
        state.items = [{ ...item, qty: 1 }];
        // very first time items is undefined
        // state.items = [...state.items, { id: 1 }];
        return;
      }

      const existingItem = state.items.find(
        (cartItem) => cartItem.id == item.id,
      );

      if (!existingItem) {
        // state.items = [...state.items, { id, qty: 1 }];

        // this method is right for redux bcz
        // redux using under hood immer for manage proper state management
        state.items.push({ ...item, qty: 1 });
        // state.items.push({ id, qty: 1 });
      }
    },
    editCartItem: (state, action) => {
      const { restaurantId, item, qty } = action.payload;

      if (state.restaurantId == restaurantId) {
        const existingItem = state.items.find(
          (cartItem) => cartItem.id == item.id,
        );

        if (existingItem) {
          existingItem.qty = existingItem.qty + qty;
        }
      }
    },

    removeCartItem: (state, action) => {
      const { restaurantId, item, qty } = action.payload;

      if (state.restaurantId == restaurantId) {
        const existingItem = state.items.find(
          (cartItem) => cartItem.id == item.id,
        );

        if (existingItem) {
          existingItem.qty = existingItem.qty - qty;
          
          if (existingItem.qty <= 0) {
            state.items = state.items.filter((cartItem) => cartItem.id != item.id);
            if (state.items.length === 0) {
              state.restaurantId = null;
            }
          }
        }
      }
    },
    
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, editCartItem, removeCartItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
