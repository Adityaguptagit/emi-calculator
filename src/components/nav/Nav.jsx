import { useSelector, useDispatch } from "react-redux";

import { setLoanType } from "../nav/loanTypeSlice";

import "./Nav.css";
function Nav() {
  const loanType = useSelector((state) => state.loanType.value);
  const dispatch = useDispatch();

  // console.log("LoanType::", loanType);
  return (
    <>
      <div className="flex justify-center items-center p-5 mx-5">
        <div
          className="text-xl font-oswald p-4 my-2"
          id="home-loan"
          onClick={(event) => {
            dispatch(setLoanType("Home"));
          }}
        >
          Home Loan
        </div>
        <div
          className="text-xl font-oswald p-4"
          id="personal-loan"
          onClick={(event) => {
            dispatch(setLoanType("Personal"));
          }}
        >
          Personal Loan
        </div>
        <div
          className="text-xl font-oswald p-4"
          id="car-loan"
          onClick={(event) => {
            dispatch(setLoanType("Car"));
          }}
        >
          Car Loan
        </div>
      </div>
    </>
  );
}
export default Nav;
