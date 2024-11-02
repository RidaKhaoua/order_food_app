import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";

const actGetCategories = createAsyncThunk("categories/actGetCategories",async(_, thunkAPI) => {
    const {rejectWithValue, signal} = thunkAPI;

    try {
        const response = axios.get("/categories", {signal});
        return (await response).data;
    } catch (error) {
       return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actGetCategories;