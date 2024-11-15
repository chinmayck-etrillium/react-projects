import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartInitialState = {
  toggleCart: false,
  items: [
    {
      quantity: 1,
      title: "Test Item",
      price: 6,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    },

    increaseQuantity(state, action) {
      state.items.forEach((item) => {
        if (item.title === action.payload.title) {
          item.quantity = item.quantity + 1;
        }
      });
    },

    decreaseQuantity(state, action) {
      state.items.forEach((item) => {
        if (item.title === action.payload.title) {
          if (item.quantity === 1) {
            state.items.pop(item);
          } else item.quantity = item.quantity - 1;
        }
      });
    },

    addNewItem(state, action) {
      const itemExists = state.items.findIndex((item) => {
        return item.title === action.payload.title;
      });

      if (itemExists === -1) {
        state.items = [...state.items, action.payload];
      }
    },
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;

export default store;
