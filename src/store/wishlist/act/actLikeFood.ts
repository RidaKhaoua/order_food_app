import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";


const actLikeProduct = createAsyncThunk("wishlist/actLikeProduct", async(foodId: number, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI;
    const {auth} = getState() as RootState;

    try {
        const checkIfFoodLikedBefore = axios.get(`/wishlist?${auth.user?.id}&foodId=${foodId}`);
        if((await checkIfFoodLikedBefore).data.length > 0) {
            await axios.delete(`/wishlist/${(await checkIfFoodLikedBefore).data[0].id}`);
            return {type: "delete", foodId};
        } else {
            await axios.post("/wishlist",{
                userId: auth.user?.id,
                foodId
            });
            return {type: "add", foodId};
        }
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actLikeProduct