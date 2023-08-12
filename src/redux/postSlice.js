import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk("post/fetchPost", async(id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).
        then(response => response.json());
})

export const postSlice = createSlice({
    name: "post",
    initialState: {
        loading: false,
        post: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.post = null;
            state.error = action.error.message;
        })
    }
})
