import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const store = configureStore({
    reducer: {
        auth: authSlice
        //TODO: and more slice here for posts
    }
})

export default store;