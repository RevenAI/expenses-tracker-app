import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    navSize: "large",
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleNavSize: (state) => {
            state.navSize = state.navSize === "small" ? "large" : "small";
        }
    }
});

export const {
    toggleNavSize
} = sidebarSlice.actions;

export default sidebarSlice.reducer;