import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchResultsSlice from "./searchResultsSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        search: searchResultsSlice,
        chat:chatSlice,
    }
});

export default store;