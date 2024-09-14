import { configureStore } from "@reduxjs/toolkit";

import counterSlicer from "./countSlice"

export const store=configureStore({
    reducer:{
        cntSlice:counterSlicer,
    },   
})