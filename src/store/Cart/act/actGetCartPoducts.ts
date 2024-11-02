import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetCartProducts = createAsyncThunk("cart/actGetCartProducts", async(_, thunkAPI) => {
    const {rejectWithValue,getState ,signal, fulfillWithValue} = thunkAPI;
    const {cart} = getState() as RootState;
    const getIdsProducts = Object.keys(cart.foodIdAndQuantity).map(id =>`id=${id}`).join("&"); 
    //[id=1, id=2];
    if(!getIdsProducts.length) {
        console.log(getIdsProducts.length)
        return fulfillWithValue([]);
    }
    try {
        const response = axios.get(`/foodlist?${getIdsProducts}`,{signal});
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
});

export default actGetCartProducts;