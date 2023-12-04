import { configureStore } from "@reduxjs/toolkit";
import loanTypeReducer from "../components/nav/loanTypeSlice";
import loanAmountReducer from "../components/loan/loanAmountSlice";
import interestRateReducer from "../components/interest/interestRateSlice";
import loanTenureReducer from "../components/tenure/loanTenureSlice";
import payableInterestReducer from "../components/computation/payableInterestSlice";
export const store = configureStore({
  reducer: {
    loanType: loanTypeReducer,
    loanAmount: loanAmountReducer,
    loanInterest: interestRateReducer,
    loanTanure: loanTenureReducer,
    paybleInterest: payableInterestReducer,
  },
});
