import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//initialize empty array to put puzzles in
const initialState = [];

//async thunk communicates with db to retrieve all puzzles
export const fetchPuzzles = createAsyncThunk('allPuzzles', async () => {
    try {
        const { data } = await axios.get(`/api/puzzles`);
        return data;
    } catch (err) {
        console.error(err);
    }
});

export const allPuzzlesSlice = createSlice({
    name: 'puzzles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPuzzles.fulfilled, (state, action) => {
            //add puzzles to state array
            return action.payload;
        });
    },
});

export const selectPuzzles = (state) => {
    return state.puzzles;
};

export default allPuzzlesSlice.reducer;