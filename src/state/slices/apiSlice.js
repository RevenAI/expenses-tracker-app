import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    data: {},
    loading: {},
    error: {},
};

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data[action.payload.url] = action.payload.data;
        },
        setLoading: (state, action) => {
            state.loading[action.payload.url] = action.payload.loading;
        },
        setError: (state, action) => {
            state.error[action.payload.url] = action.payload.error;
        },
    },
});

export const {
    setData,
    setLoading,
    setError
} = apiSlice.actions;
export default apiSlice.reducer;