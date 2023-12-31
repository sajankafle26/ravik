import { createSlice } from "@reduxjs/toolkit";

var initialState={
    value: 0
}
export const counterSlice=createSlice({
    name: "counter",
    initialState,
    reducers:{
        inc: (state)=>{
            state.value +=1
        },
        desc: (state)=>{
            state.value -=1
        }
    }
})

export const {inc, desc}=counterSlice.actions;

export default counterSlice.reducer