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

    try {
      const userWishlist = axios.get<{ foodId: number }[]>(
        `/wishlist?userId=${auth.user?.id}`,
        { signal }
      );
      
      if (!(await userWishlist).data.length) {
        return { data: [], dataType: "empty" };
      }

      if (data === "foodIds") {
        const arrayOfFoodId = (await userWishlist).data.map(
          (item) => item.foodId
        );
        return { data: arrayOfFoodId, dataType: "foodIds" };

      } else if (data === "wishlistFood") {
        const getFoodIdsAndConcatinated = (await userWishlist).data
          .map((item) => `id=${item.foodId}`)
          .join("&");
        const response = axios.get<TFood[]>(
          `/foodlist?${getFoodIdsAndConcatinated}`
        );
        return { data: (await response).data, dataType: "wishlistFood" };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetLikedFoods;
