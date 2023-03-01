import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    info: {},
};

//async thunk communicates with db to get user with matching ID
export const fetchSingleUser = createAsyncThunk(
    "singleUser",
    async (id) => {
        try {
            const { data } = await axios.get(`/api/users/${id}`);
            return data;
        } catch (err) {
            console.error(err);
        }
    }
);

const singleUserSlice = createSlice({
    name: "singleUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleUser.fulfilled, (state, action) => {
                state.info = action.payload;
            })
            }
});

export const selectSingleUser = (state) => {
    return state.singleUser;
};

export default singleUserSlice.reducer;
