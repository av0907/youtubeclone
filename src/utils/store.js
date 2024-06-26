import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchResultsSlice from "./searchResultsSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        search: searchResultsSlice,
    }
});

export default store;