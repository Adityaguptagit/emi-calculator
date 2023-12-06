import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPayableInterest } from "./payableInterestSlice";

function Computation() {
  const dispatch = useDispatch();
  const [loanEmi, setLoanEmi] = useState(0);
  let loanInterest = useSelector((state) => state.loanInterest.value);
  let loanAmount = useSelector((state) => state.loanAmount.value);
  let loanTenure = useSelector((state) => state.loanTanure.value);
  let payableInterest = useSelector((state) => state.paybleInterest.value);

  function compute() {
    let r = loanInterest / 12 / 100;
    if (r === 0) {
      // If 'r' is zero to avoid division by zero
      setLoanEmi(0);
    } else {
      let emi = Math.floor(
        (loanAmount * r * Math.pow(1 + r, loanTenure * 12)) /
          (Math.pow(1 + r, loanTenure * 12) - 1)
      );
      setLoanEmi(emi || 0);
    }
  }
  useEffect(() => {
    compute();
  }, [loanTenure]);

  useEffect(() => {
    let intrstPybl = loanEmi * loanTenure * 12 - loanAmount;
    dispatch(setPayableInterest(intrstPybl));
  }, [loanTenure, loanEmi, loanAmount]);

  // console.log("loan emi::::", loanEmi);
  //console.log("payableInterest:::::", payableInterest);
  return (
    <>
      <div className="flex justify-center p-5 mx-5 flex-wrap flex-col lg:w-1/2 md:flex-col">
        <div className="font-oswald text-xl flex justify-center ">Loan EMI</div>

        <div className="font-oswald flex justify-center mt-2">
          ₹ {loanTenure > 0 ? loanEmi : 0}
        </div>

        <div className="mt-5 font-oswald text-xl flex justify-center">
          Total Interest Payable
        </div>

        <div className="font-oswald flex justify-center mt-2">
          ₹ {loanTenure > 0 ? loanEmi * loanTenure * 12 - loanAmount : 0}
        </div>

        <div className="font-oswald text-xl flex justify-center mt-5">
          Total Payment (Priciple + Interest)
        </div>

        <div className="font-oswald flex justify-center mt-2">
          ₹ {loanTenure > 0 ? loanEmi * loanTenure * 12 : 0}
        </div>
      </div>
    </>
  );
}

export default Computation;
