//slice is a thing which store components state and we can update the by dispacting its action which calls its corresponding reducer and update the store

import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name:"request",
    initialState: [],
    reducers:{
        addRequest:(state,action)=> action.payload,
    }
})

export const {addRequest} = requestSlice.actions
export default requestSlice.reducer