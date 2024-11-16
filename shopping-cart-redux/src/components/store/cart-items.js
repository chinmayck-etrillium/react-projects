import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    fetchData(state, action) {
      state.items = action.payload;
    },

    increaseQuantity(state, action) {
      state.changed = true;
      state.items.forEach((item) => {
        if (item.title === action.payload.title) {
          item.quantity = item.quantity + 1;
        }
      });
    },

    decreaseQuantity(state, action) {
      state.changed = true;
      state.items.forEach((item) => {
        if (item.title === action.payload.title) {
          if (item.quantity === 1) {
            state.items.pop(item);
          } else item.quantity = item.quantity - 1;
        }
      });
    },

    addNewItem(state, action) {
      state.changed = true;
      const itemExists = state.items.findIndex((item) => {
        return item.title === action.payload.title;
      });

      if (itemExists === -1) {
        state.items = [...state.items, action.payload];
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
