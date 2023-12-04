import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const loanAmountSlice = createSlice({
  name: "loanAmount",
  initialState,
  reducers: {
    setLoanAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLoanAmount } = loanAmountSlice.actions;

export default loanAmountSlice.reducer;
