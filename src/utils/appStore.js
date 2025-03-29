import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

//appstore mai action aata hai and store ka reducer slice ka reducer find karta jiske liye ye action aaya hai
const appStore = configureStore({
    reducer:{
        user:userReducer
    }
})//the store is created by redux toolkit method configure  // in app store reducer we store reducer of cart slice which update the slice state

export default appStore