import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//initialize empty array to put users in
const initialState = [];

//async thunk communicates with db to retrieve all users
export const fetchUsers = createAsyncThunk('allUsers', async () => {
    try {
        const { data } = await axios.get(`/api/users`);
        return data;
    } catch (err) {
        console.error(err);
    }
});

const allUsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            //add users to state array
            return action.payload;
        });
    },
});

export const selectUsers = (state) => {
    return state.users;
};

export default allUsersSlice.reducer;