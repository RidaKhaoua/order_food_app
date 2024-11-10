import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetFoodListByCategory = createAsyncThunk(
  "foodList/actGetFoodListByCategory",
  async (cateName: string, thunkAPI) => {
    console.log(cateName);
    const { rejectWithValue } = thunkAPI;
    const category =
      cateName.toLocaleLowerCase() === "all"
        ? "/foods"
        : `/foods?filters[category][$eq]=${cateName}`;
    try {
      const response = axios.get(category);
      return (await response).data.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetFoodListByCategory;
