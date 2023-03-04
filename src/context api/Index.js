import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./Context";


export const store = configureStore({
    reducer:{
        search: SearchSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})