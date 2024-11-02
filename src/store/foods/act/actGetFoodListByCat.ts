import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetFoodListByCategory = createAsyncThunk(
  "foodList/actGetFoodListByCategory",
  async (cateName: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const category = cateName.toLocaleLowerCase() === "all" ? "" : `category=${cateName}`
    try {
        const response = axios.get(`/foodlist?${category}`);
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetFoodListByCategory;
