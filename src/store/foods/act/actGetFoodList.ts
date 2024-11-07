import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";


const actGetFoodList = createAsyncThunk("foodlist/actGetFoodList", async(_, thunkAPI) => {
        const {rejectWithValue, signal} = thunkAPI;
        try {
            const response = axios.get("/foods", {signal});
            return (await response).data?.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
})

export default actGetFoodList