/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { isString, TFood, TStatus } from "@types";
import actGetCartProducts from "./act/actGetCartPoducts";

interface ICart {
  foodIdAndQuantity: { [keyof: string]: number };
  foods: TFood[];
  status: TStatus;
  error: null | string;
}

const initialState: ICart = {
  foodIdAndQuantity: {},
  foods: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cleanCart: (state) => {
      state.foods = [];
      state.status = "idle";
    },

    addFoodToCart: (state, action) => {
      const id = action.payload;
      if (state.foodIdAndQuantity[id]) {
        state.foodIdAndQuantity[id] += 1;
      } else {
        state.foodIdAndQuantity[id] = 1;
      }
    },

    minusFoodToCart: (state, action) => {
      const id = action.payload;
      if (state.foodIdAndQuantity[id] > 0) {
        state.foodIdAndQuantity[id] -= 1;
        if (state.foodIdAndQuantity[id] === 0) {
          delete state.foodIdAndQuantity[id];
          state.foods = state.foods.filter((item) => item.id !== id);
        }
      }
    },
    removeFoodFromCart: (state, action) => {
      const id = action.payload;
      delete state.foodIdAndQuantity[id];
      state.foods = state.foods.filter((item) => item.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCartProducts.pending, (state) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(actGetCartProducts.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.foods = action.payload;
      }),
      builder.addCase(actGetCartProducts.rejected, (state, action) => {
        state.status = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });
  },
});

export { actGetCartProducts };
export const { addFoodToCart, minusFoodToCart, cleanCart, removeFoodFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
