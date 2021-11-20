import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchValues = createAsyncThunk('values/getValues', async () => {
    const res = await axios(`https://covid19.mathdro.id/api/`);
    return res.data;
});

export const valuesSlice = createSlice({
    name: 'covidvalues',
    initialState: {
        values: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [fetchValues.fulfilled]: (state, action) => {
            state.values = action.payload;
        },
        [fetchValues.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchValues.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = state.error.message;
        },
    },
});

export default valuesSlice.reducer;