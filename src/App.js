import "./App.css";
import Nav from "./components/nav/Nav";
import LoanAmount from "./components/loan/LoanAmount";
import InterestRate from "./components/interest/InterestRate";
import LoanTenure from "./components/tenure/LoanTenure";
import Computation from "./components/computation/Computation";
import Chart from "./components/chart/Chart";

function App() {
  return (
    <>
      <div className="border-y-2 border-stone-400 w-full h-full flex justify-center flex-wrap">
        <h1 className="text-center text-2xl  font-merriweather p-5 mx-5">
          EMI Calculator for Home Loan, Car Loan & Personal Loan in India
        </h1>
      </div>
      <div className="w-full h-full flex justify-center">
        <Nav />
      </div>
      <div className="flex justify-center w-full h-full">
        <LoanAmount />
      </div>
      <div className="border-y-2 border-stone-400 w-full h-full flex justify-center">
        <InterestRate />
      </div>
      <div className="border-y-2 border-stone-400 w-full h-full flex justify-center">
        <LoanTenure />
      </div>
      <div className="w-full flex justify-center  flex-col  h-full border-y-2 border-stone-400  lg:flex-row lg:justify-center lg:flex">
        <Computation />
        <Chart />
      </div>
    </>
  );
}

export default App;
