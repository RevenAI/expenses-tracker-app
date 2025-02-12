import {
    configureStore
} from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import hoverReducer from "./slices/hoverSlice";
import apiReducer from "./slices/apiSlice";
import createExpenseReducer from "./slices/createExpenseSlice";

export const store = configureStore({
    reducer: {
        api: apiReducer,
        sidebar: sidebarReducer,
        hover: hoverReducer,
        createExpenses: createExpenseReducer,
    }
});