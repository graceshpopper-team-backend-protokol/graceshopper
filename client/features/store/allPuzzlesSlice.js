import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//initialize empty array to put puzzles in
const initialState = [];

//async thunk communicates with db to retrieve all puzzles
export const fetchPuzzles = createAsyncThunk('allPuzzles', async () => {
    try {
        const { data } = await axios.get(`/api/puzzles`);
        console.log(`from fetchPuzzles: ${data}`);
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
            console.log(`from allPuzzlesSlice reducer payload: ${action.payload}`)
            return action.payload;
        });
    },
});

export const selectPuzzles = (state) => {
    console.log(`from selectPuzzles: ${state.puzzles}`);
    return state.puzzles;
};

export default allPuzzlesSlice.reducer;