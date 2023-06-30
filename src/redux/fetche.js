import { createAsyncThunk  , createSlice} from "@reduxjs/toolkit";

import axios from "axios";
import { userSlice } from "./User";

export const getData = createAsyncThunk('posts/getData' , async()=>{
    try{
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return posts.data
    }catch(error){
        return error.message
    }
})


const initialState = {
    data : [],
    isLoading : false,
    isSuccess : false,
    errorMessage : ""
}


export const PostSlice = createSlice({
    name : "posts",
    initialState,
    extraReducers : {
        [getData.pending] : (state)=>{
            state.isLoading = true
        },


        [getData.fulfilled] : (state , action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        },

        [getData.rejected] : (state , action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload
        }



    }
})

export default PostSlice.reducer