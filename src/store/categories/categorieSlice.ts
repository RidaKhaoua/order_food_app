import { createSlice } from "@reduxjs/toolkit";
import { isString, TCategory, TStatus } from "@types";
import actGetCategories from "./act/actGetCategories";
interface ICategory {
    categories : TCategory[],
    status : TStatus,
    error : null | string
}

const initialState : ICategory =  {
    categories: [],
    status: "idle",
    error: null,
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        builder.addCase(actGetCategories.pending, (state) => {
            state.status= "pending";
            state.error = null;
        }),
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            console.log(action)
            state.status = "fullfield";
            state.categories = action.payload.data;
        }),
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.status = "failed";
            
            if(isString(action.payload)) {
                state.error = action.payload;
            }
        })
    }
})

export {
    actGetCategories,
    
}

export default categoriesSlice.reducer;