import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
};

export const loanTenureSlice = createSlice({
  name: "loanTanure",
  initialState,
  reducers: {
    setLoanTenure: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoanTenure } = loanTenureSlice.actions;

export default loanTenureSlice.reducer;
