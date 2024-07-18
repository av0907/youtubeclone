import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen : true,
        videoRequested:""
    },
    reducers:{
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu :(state)=>{
            state.isMenuOpen= false;
        },
        requestVideos:(state,action)=>{
            state.videoRequested=action.payload;
        }
    }
});

export default appSlice.reducer;
export const {toggleMenu, closeMenu,requestVideos} = appSlice.actions;