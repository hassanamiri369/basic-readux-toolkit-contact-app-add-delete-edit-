import {configureStore} from "@reduxjs/toolkit";

// reducers 

// پس این رو با یه اسم دیگه باید صدا بزنی
import UserReducer from "./User"
import ThemeColor from "./ThemeColor";
import  PostSlice  from "./fetche";


export const store = configureStore({
    reducer : {
        users : UserReducer,
        theme : ThemeColor,
        posts : PostSlice
    }
})


