import { createSlice } from "@reduxjs/toolkit";



const counterSlicer=createSlice({
    name:'cntSlice',
    initialState:{
        cnt:0,
    },
    reducer:{
       
        increment:(state)=>{console.log('object')
         state+1}
    },
    
})

export const {increment}=counterSlicer.actions
export default counterSlicer.reducer

