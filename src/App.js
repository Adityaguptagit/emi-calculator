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
      <div>
        <div className="border-2 border-stone-400">
          <h1 className="text-center text-2xl  font-merriweather p-5 mx-5">
            EMI Calculator for Home Loan, Car Loan & Personal Loan in India
          </h1>
        </div>
        <div className="border-x-2 border-stone-400">
          <Nav />
        </div>
        <div className="border-x-2 border-stone-400">
          <LoanAmount />
        </div>
        <div className="border-2 border-stone-400">
          <InterestRate />
        </div>
        <div className="border-2 border-stone-400">
          <LoanTenure />
        </div>
        <div className="border-2 border-stone-400  lg:flex-row lg:justify-center lg:flex">
          <Computation />
          <Chart />
        </div>
      </div>
    </>
  );
}

export default App;
