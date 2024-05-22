import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let oldDataObject = state.cart.find((el) => el.id == action.payload.id);

      if (oldDataObject) {
        let newDataArray = state.cart.map((el) => {
          if (el.id == action.payload.id) {
            return { ...el, qun: el.qun + 1 };
          }
          return el;
        });

        // Old product quantity update
        state.cart = newDataArray;
      } else {
        // New product add to cart
        state.cart.push(action.payload);
      }
    },

    // Removed Kora Apner Home Work
    removCart: (state, action) => {
      let index = state.cart.findIndex(
        (Proadct) => Proadct.id === action.payload.id
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});
export const { addCart, removCart } = cartSlice.actions;
export default cartSlice.reducer;
