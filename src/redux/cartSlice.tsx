import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CartItem } from "../types";

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price, image } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        // If item already exists in cart, increment quantity
        existingItem.quantity++;
      } else {
        // If item is not in cart, add it with quantity of 1
        state.cart.push({
          id,
          title,
          price,
          image,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export default cartSlice.reducer;
export const { removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.cart;
export const { addtocart } = cartSlice.actions;
