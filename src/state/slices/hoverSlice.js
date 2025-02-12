import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    hoveredItem: null, // This tracks which item is hovered
};

const hoverSlice = createSlice({
    name: "hover",
    initialState,
    reducers: {
        setHoverState: (state, action) => {
            state.hoveredItem = action.payload; // This stores the hovered item ID
        },
    },
});

export const {
    setHoverState
} = hoverSlice.actions;
export default hoverSlice.reducer;