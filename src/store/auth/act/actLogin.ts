import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";


interface IActlogin {
    email?: string,
    password?: string
}

const actLogin = createAsyncThunk("auth/actLogin", async(data: IActlogin, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const response = axios.post("/login", data);
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actLogin