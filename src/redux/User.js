import {createSlice} from "@reduxjs/toolkit";
import { UsersData } from "./data";

export const userSlice = createSlice({
    name : "users",
    initialState : {value : []},
    reducers : {
        addUser : (state , action) =>{
            state.value.push(action.payload)
            
        } , 

        deleteUser : (state , action)=>{
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        } , 

        editUser : (state , action)=>{
            const user = state.value.find(x => x.id === action.payload.id)
            if(user){
               user.name = action.payload.name ;
               user.username = action.payload.username;
            }
        }
    }
})

export const {addUser , deleteUser , editUser} = userSlice.actions;
export default userSlice.reducer;