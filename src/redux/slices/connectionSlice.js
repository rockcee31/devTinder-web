import { createSlice } from "@reduxjs/toolkit";

const  connectionSlice = createSlice({
    name:"connections",
    initialState:[],
    reducers:{
        addConnections:(state,action)=> action.payload, // Update the state with the fetched data

        
        removeConnections: () => null,
    }

}) 
export const {addConnections, removeConnections} = connectionSlice.actions

export default connectionSlice.reducer