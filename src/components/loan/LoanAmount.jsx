import React from "react";
import { setLoanAmount } from "./loanAmountSlice";
import { useSelector, useDispatch } from "react-redux";

function LoanAmount() {
  const loanType = useSelector((state) => state.loanType.value);

  const dispatch = useDispatch();
  function handleChange(event) {
    const amnt = event.target.value;
    dispatch(setLoanAmount(amnt));
  }

  return (
    <>
      <div className="flex justify-center p-5 mx-5 flex-wrap w-full h-full">
        <div className="heading  p-3 m-1 text-xl font-oswald">
          {loanType} Loan Amount
        </div>
        <div className="input p-3 m-1  w-full h-full lg:w-60 md:w-60">
          <input
            style={{ border: "2px solid black", borderRadius: "3px" }}
            className="w-full"
            type="number"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
export default LoanAmount;
