/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { isString, TFood, TStatus } from "@types";
import actGetFoodList from "./act/actGetFoodList";
import actGetFoodListByCategory from "./act/actGetFoodListByCat";
import { discountCode } from "@constantData/constantData";

interface IFoods {
  foodList: TFood[];
  discountPrice: number;
  status: TStatus;
  error: null | string;
}

const initialState: IFoods = {
  foodList: [],
  discountPrice: 0,
  status: "idle",
  error: null,
};

const foodsSlice = createSlice({
  name: "foodList",
  initialState,
  reducers: {
    discountTotalPrice: (state, action) => {
      const discountName = action.payload;
      const getDiscountInfo = discountCode.filter(
        (item) => item.discountName === discountName
      );
      if (!getDiscountInfo.length) {
        state.discountPrice = -1;
      }else {
        state.discountPrice = getDiscountInfo[0].discVal;
      }
    },
    resetDiscount: (state) =>{
      state.discountPrice = 0;
    }
  },
  extraReducers: (builder) => {
    //Act Get Foodlist
    builder.addCase(actGetFoodList.pending, (state) => {
      state.status = "idle";
      state.error = null;
    }),
      builder.addCase(actGetFoodList.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.foodList = action.payload;
      }),
      builder.addCase(actGetFoodList.rejected, (state, action) => {
        state.status = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });
    //  Act Get Foodlist by Category
    builder.addCase(actGetFoodListByCategory.pending, (state) => {
      state.status = "pending";
      state.error = null;
    }),
      builder.addCase(actGetFoodListByCategory.fulfilled, (state, action) => {
        state.status = "fullfield";
        state.foodList = action.payload;
      }),
      builder.addCase(actGetFoodListByCategory.rejected, (state, action) => {
        state.status = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });
  },
});

export { actGetFoodList, actGetFoodListByCategory };

export const {discountTotalPrice, resetDiscount} = foodsSlice.actions;
export default foodsSlice.reducer;
