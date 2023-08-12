import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import { userSlice } from "./userSlice";
import { postSlice } from "./postSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        user: userSlice.reducer,
        post: postSlice.reducer,
    }
})