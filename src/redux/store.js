import { configureStore } from "@reduxjs/toolkit";

import valuesSlice  from "./valuesSlice";
import countriesSlice from "./contriesSlice";

export const store = configureStore({
    reducer: {
        covidvalues: valuesSlice,
        countries: countriesSlice,
    },
});