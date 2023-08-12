import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async() => {
    return fetch("https://jsonplaceholder.typicode.com/users").
        then(response => response.json());
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        users: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
})