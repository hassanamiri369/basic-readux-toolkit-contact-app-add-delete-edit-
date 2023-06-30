import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
    name : "theme",
    initialState : {color : "white"},
    reducers : {
        chnageColor : (state , action)=>{
          state.color = action.payload
            
        }
    }
})


export const {chnageColor} = themeSlice.actions;
export default themeSlice.reducer;