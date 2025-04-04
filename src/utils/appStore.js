import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionSlice"
import requestReducer from "./requestSlice"
//appstore mai action aata hai and store ka reducer slice ka reducer find karta jiske liye ye action aaya hai

//ye jo action dispatch hua  hai ye kis slice ke reducer ko call karna chahta hai store  ke reducer ka ye kaam hai bss
const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connections:connectionReducer,
        request:requestReducer
    }
})//the store is created by redux toolkit method configure  // in app store reducer we store reducer of cart slice which update the slice state

export default appStore;