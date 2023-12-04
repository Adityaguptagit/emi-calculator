import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

function Chart() {
  const paybleInterest = useSelector((state) => state.paybleInterest.value);
  const loanAmount = useSelector((state) => state.loanAmount.value);

  // console.log("paybleInterest::", paybleInterest);
  // console.log("loanAmount::", loanAmount);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "12px",
        }}
        className="p-5 mx-5 w-full lg:w-1/2 md:flex-col h-full"
      >
        <Pie
          data={{
            labels: ["Total Interest", "Principal Loan Amount"],
            datasets: [
              {
                data: [paybleInterest, loanAmount],
                backgroundColor: ["rgb(255, 161, 71)", "rgb(139, 161, 77)"],
                hoverOffset: 4,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
          style={{ height: "250px", width: "250px" }}
        />
      </div>
    </>
  );
}

export default Chart;
