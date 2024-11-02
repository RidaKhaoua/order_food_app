/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { isString, TFood, TStatus } from "@types";
import actLikeProduct from "./act/actLikeFood";
import actGetLikedFoods from "./act/actGetLikedFoods";

interface IWishlistSlice {
  foodIds: number[];
  wishlistFoods: TFood[];
  status: TStatus;
  error: string | null;
}

const initialState: IWishlistSlice = {
  foodIds: [],
  wishlistFoods: [],
  status: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanWishlist: (state) => {
      state.foodIds= [];
      state.wishlistFoods = [];
    }
  },
  extraReducers: (builder) => {
    // Act getLikeProduct
    builder.addCase(actGetLikedFoods.pending, (state) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(actGetLikedFoods.fulfilled, (state, action) => {
        state.status = "fullfield";
        if (action.payload) {
          const { data, dataType } = action.payload;
          if (dataType === "foodIds") {
            state.foodIds = data as number[];
          } else if (dataType === "wishlistFood") {
            state.wishlistFoods = data as TFood[];
          }
        }
      }),
      builder.addCase(actGetLikedFoods.rejected, (state, action) => {
        state.status = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });
    // Act LikeProduct
    builder.addCase(actLikeProduct.pending, (state) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(actLikeProduct.fulfilled, (state, action) => {
        state.status = "fullfield";
        if (action.payload) {
          const { type, foodId } = action.payload;
          if (type === "delete") {
            state.foodIds = state.foodIds.filter((id) => id !== foodId);
            state.wishlistFoods = state.wishlistFoods.filter(
              (item) => item.id !== foodId
            );
          } else if (type === "add") {
            state.foodIds.push(foodId);
          }
        }
      });
    builder.addCase(actLikeProduct.rejected, (state, action) => {
      state.status = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actLikeProduct, actGetLikedFoods };
export const {cleanWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer;
