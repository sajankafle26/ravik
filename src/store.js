import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
export var store=configureStore({
    reducer: {
        counter: counterReducer
    }
})