import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";


interface IRegister {
    email: string,
    username: string,
    password: string,
}

const actRegister = createAsyncThunk("auth/actRegister", async(data: IRegister, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const response = axios.post("/auth/local/register", data);
        return (await response).data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actRegister;