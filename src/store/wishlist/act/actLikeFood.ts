import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actLikeProduct = createAsyncThunk(
  "wishlist/actLikeProduct",
  async (foodId: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const checkIfFoodLikedBefore = axios.get(
        `/wishlists?filters[userId][$eq]=${auth.user?.id}&filters=[foodId][$eq]=${foodId}`,
        {
          headers: {
            Authorization: `Bearer ${auth.jwt}`,
          },
        }
      );

      if ((await checkIfFoodLikedBefore).data.data.length > 0) {
        await axios.delete(
          `/wishlists/${
            (
              await checkIfFoodLikedBefore
            ).data.data[0].documentId
          }`,
          {
            headers: {
              Authorization: `Bearer ${auth.jwt}`,
            },
          }
        );
        return { type: "delete", foodId };
      } else {
        console.log("inside Add");

        await axios.post(
          "/wishlists",
          {
            data: {
              userId: auth.user?.id,
              foodId,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${auth.jwt}`,
            },
          }
        );

        return { type: "add", foodId };
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actLikeProduct;
