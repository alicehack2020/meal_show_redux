const { createSlice } = require("@reduxjs/toolkit");

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state, action) {
            //console.log(action.payload);
           // console.log(state); 
            return state.filter((item) => item.idCategory !== action.payload.idCategory);
        },
    }
})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;