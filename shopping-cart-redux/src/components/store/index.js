import {  configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-updates";
import cartSlice from "./cart-items";

// const cartInitialState = {
//   toggleCart: false,
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: cartInitialState,
//   reducers: {
//     toggleCart(state) {
//       state.toggleCart = !state.toggleCart;
//     },

//     increaseQuantity(state, action) {
//       state.items.forEach((item) => {
//         if (item.title === action.payload.title) {
//           item.quantity = item.quantity + 1;
//         }
//       });
//     },

//     decreaseQuantity(state, action) {
//       state.items.forEach((item) => {
//         if (item.title === action.payload.title) {
//           if (item.quantity === 1) {
//             state.items.pop(item);
//           } else item.quantity = item.quantity - 1;
//         }
//       });
//     },

//     addNewItem(state, action) {
//       const itemExists = state.items.findIndex((item) => {
//         return item.title === action.payload.title;
//       });

//       if (itemExists === -1) {
//         state.items = [...state.items, action.payload];
//       }
//     },
//   },
// });

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
