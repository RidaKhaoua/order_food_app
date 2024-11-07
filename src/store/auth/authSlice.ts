/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import { isString, TStatus, TUser } from "@types";
import actRegister from "./act/actRegister";
import actLogin from "./act/actLogin";

interface IAuth {
    user : TUser| null,
    jwt : null | string,
    status: TStatus,
    error: null | string
}

const initialState: IAuth = {
    user: null,
    jwt: null,
    status: "idle",
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        resetUi : (state) => {
            state.status ="idle";
            state.error = null
        },
        resetAuth: (state) => {
            state.user = null
            state.jwt = null;
            state.status = "idle";
        }
    },
    extraReducers: (builder) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        builder.addCase(actRegister.pending, (state) => {
            state.status = "pending";
            state.error = null
        }),
        builder.addCase(actRegister.fulfilled, (state, action) => {
            state.status = "fullfield";
            state.user = action.payload.user;
            state.jwt = action.payload.jwt;
        }),
        builder.addCase(actRegister.rejected, (state, action) => {
            state.status = "failed";
            if(isString(action.payload)) {
                state.error = action.payload
            }
        })
        // Act login
        builder.addCase(actLogin.pending, (state) => {
            state.status = "pending";
            state.error = null;
        }),
        builder.addCase(actLogin.fulfilled, (state, action) => {
            state.status = "fullfield";
            state.user = action.payload.user;
            state.jwt = action.payload.jwt;
        }),
        builder.addCase(actLogin.rejected, (state, action) => {
            state.status = "failed";
            if(isString(action.payload)) 
            state.error = action.payload;
        })
        
    }
})

export const {resetAuth, resetUi} = authSlice.actions;
export {
    actRegister,
    actLogin
}
export default authSlice.reducer