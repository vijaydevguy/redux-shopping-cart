export const cartItems = (store) => store.cart.items;

export const cartCount = (store) =>
  store.cart.items.reduce((sum, item) => sum + item.qty, 0);

export const restaurantId = (store) => store.cart.restaurantId;

// export const selectFullCartDetails = (state, allProducts = []) => {
//   return state.cart.items.map((cartItem) => {
//     const product = allProducts.find((p) => p.id === cartItem.id);
//     return {
//       ...product,
//       qty: cartItem.qty,
//     };
//   });
// };
