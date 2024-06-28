import { createSelector } from "@reduxjs/toolkit";
import { selectCartItems } from "./cartSlice";

export const selectTotalPrice = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);
