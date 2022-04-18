import { createSlice } from "@reduxjs/toolkit";


const loginSlice=createSlice({
    name:'login',
    initialState:{isAuth:false},
    reducers:{
        loginStatusChange(state,action){
            state=action.payload
        }
    }
})

export const {loginStatusChange}=loginSlice.actions;
export default loginSlice.reducer;