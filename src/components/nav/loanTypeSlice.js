import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Home",
};

export const loanTypeSlice = createSlice({
  name: "loanType",
  initialState,
  reducers: {
    setLoanType: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoanType } = loanTypeSlice.actions;

export default loanTypeSlice.reducer;
