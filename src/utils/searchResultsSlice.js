import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
    name:"searchSlice",
    initialState:{},
    reducers:{
        storeCache : (state, action)=>{
            state = Object.assign(state, action.payload);
        },
    },
})

export const {storeCache} = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
