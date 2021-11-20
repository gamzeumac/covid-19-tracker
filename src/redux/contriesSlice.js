import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`https://covid19.mathdro.id/api/daily`);
      const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }));
      return modifiedData;
    } catch (error) {}
  };


export const fetchAllCounties = createAsyncThunk('countries/fetchAll', async () => {
    const res = await axios(`https://disease.sh/v3/covid-19/countries`);
    return res.data;
})


export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        items: [],
        isLoading: false    
    },
    reducers: {},
    extraReducers: {
        [fetchAllCounties.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchAllCounties.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchAllCounties.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = state.error.message;
        },
    },
});

export default countriesSlice.reducer;