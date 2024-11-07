import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { TFood } from "@types";

import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TData = "foodIds" | "wishlistFood";

const actGetLikedFoods = createAsyncThunk(
  "wishlist/actGetLikedFood",
  async (data: TData, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState() as RootState;
    console.log(auth.user?.id)
    try {
      const userWishlist = axios.get<{data:{ foodId: number }[]}>(
        `/wishlists?filters[userId][$eq]=${auth.user?.id}`,{
          headers:{
            Authorization: `Bearer ${auth.jwt}`
          }
          , signal
        },
       
      );
      
      if (!(await userWishlist).data.data.length) {
        return { data: [], dataType: "empty" };
      }

      if (data === "foodIds") {
        const arrayOfFoodId = (await userWishlist).data.data.map(
          (item) => item.foodId
        );
        return { data: arrayOfFoodId, dataType: "foodIds" };

      } else if (data === "wishlistFood") {
        const getFoodIdsAndConcatinated = (await userWishlist).data.data
          .map((item) => `filters[id][$in]=${item.foodId}`)
          .join("&");
        const response = axios.get(
          `/foods?${getFoodIdsAndConcatinated}`
        );
        return { data: (await response).data.data, dataType: "wishlistFood" };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetLikedFoods;
