import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state,action) => {
            //update state object to show user we are loading data
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            //update state to show retrieved data
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state,action) => {
            //update error state to error object
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(addUser.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled , (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id
            })
            console.log(action)
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = usersSlice.reducer;