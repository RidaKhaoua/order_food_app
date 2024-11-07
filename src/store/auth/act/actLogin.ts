import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";


interface IActlogin {
    identifier?: string,
    password?: string
}

const actLogin = createAsyncThunk("auth/actLogin", async(data: IActlogin, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const response = axios.post("/auth/local", data);
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actLogin