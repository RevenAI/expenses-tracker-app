import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    formData: {
        subject: "",
        description: "",
        merchant: "",
        location: "",
        amount: "",
        date: "",
        currency: "NGN",
        category: "",
        payment_method: "Credit Card",
        additional_info: "",
        add_to_report: false,
    },
    status: "idle", // idle | loading | succeeded | failed
    error: null,
};

const createExpenseSlice = createSlice({
    name: "createExpenses",
    initialState,
    reducers: {
        updateFormField: (state, action) => {
            const {
                name,
                value
            } = action.payload;
            state.formData[name] = value;
        },
        resetForm: (state) => {
            state.formData = {
                ...initialState.formData
            };
            state.status = "idle";
            state.error = null;
        },
        setLoading: (state) => {
            state.status = "loading";
            state.error = null;
        },
        setSuccess: (state) => {
            state.status = "succeeded";
            state.formData = {
                ...initialState.formData
            };
        },
        setError: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
    },
});

export const {
    updateFormField,
    resetForm,
    setLoading,
    setSuccess,
    setError
} = createExpenseSlice.actions;
export default createExpenseSlice.reducer;