import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LoanTenure.css";
import { setLoanTenure } from "./loanTenureSlice";

function LoanTenure() {
  const loanTenure = useSelector((state) => state.loanTanure.value);
  const [tenureType, setTenureType] = useState("Year");
  const dispatch = useDispatch();

  function handleClickYear(event) {
    setTenureType("Year");
  }
  function handleClickMonth(event) {
    setTenureType("Month");
  }
  function handleChange(event) {
    const tenure = event.target.value;
    dispatch(setLoanTenure(tenure));
  }
  // console.log("loantenure::", loanTenure);
  return (
    <>
      <div className="flex justify-center flex-wrap p-5 mx-5 w-full h-full">
        <div className="heading p-3 text-xl font-oswald m-1">Loan Tanure</div>
        <div className="input p-3 m-1 w-full h-full lg:w-60 md:w-60">
          <input
            className="w-full"
            style={{ border: "2px solid black", borderRadius: "3px" }}
            value={tenureType == "Year" ? loanTenure : loanTenure * 12}
            type="number"
            onChange={handleChange}
          />
        </div>
        {/**********************************/}
        <div
          className="lg:w-60 Year mx-5 w-full text-center p-3 m-1"
          onClick={handleClickYear}
        >
          Yr
        </div>
        <div
          className="lg:w-60  w-full Month mx-5 text-center p-3 m-1"
          onClick={handleClickMonth}
        >
          Mo
        </div>
      </div>
    </>
  );
}
export default LoanTenure;
