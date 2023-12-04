import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const InterestRateSlice = createSlice({
  name: "loanInterest",
  initialState,
  reducers: {
    setLoanInterest: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLoanInterest } = InterestRateSlice.actions;
export default InterestRateSlice.reducer;
