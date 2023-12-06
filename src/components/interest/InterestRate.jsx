import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoanInterest } from "./interestRateSlice";
function InterestRate() {
  const loanInterest = useSelector((state) => state.loanInterest.value);
  const dispatch = useDispatch();
  function handleChange(event) {
    const intrstAmnt = event.target.value;
    dispatch(setLoanInterest(intrstAmnt));
  }
  // console.log("loaninterest::", loanInterest);
  return (
    <>
      <div className="flex justify-center p-5 mx-5 flex-wrap w-full h-full">
        <div className="heading p-3 m-1 text-xl font-oswald">Interest Rate</div>
        <div className="input p-3 m-1 w-full h-full lg:w-60 md:w-60">
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
export default InterestRate;
