import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const PayableInterestSlice = createSlice({
  name: "paybleInterest",
  initialState,
  reducers: {
    setPayableInterest: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPayableInterest } = PayableInterestSlice.actions;
export default PayableInterestSlice.reducer;
