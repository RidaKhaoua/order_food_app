import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const cartTotalQuantitySelectore = createSelector(
  (state: RootState) => state.cart.foodIdAndQuantity,
  (items) => {
    const cartQuantity = Object.values(items).reduce(
      (acc, item) => acc + item,
      0
    );
    return cartQuantity;
  }
);

export default cartTotalQuantitySelectore