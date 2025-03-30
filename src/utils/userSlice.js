import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
          return action.payload
        },
        removeUser:(state,action)=>{
            return state.length=0;
        }
    }

})

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer