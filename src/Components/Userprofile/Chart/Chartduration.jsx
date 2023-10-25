import React ,{useState}from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";


ChartJS.register(ArcElement, Tooltip, Legend);




export const data = {
  labels: ["YOGA", "BODY WEIGHT", "JUMPINGRope","DANCE", "PELATIES"],

  datasets: [
    {
      label: "Calories ",
      data: [756.0, 999, 213, 535, 1112],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

const averageCalories =
  data.datasets[0].data.reduce((sum, value) => sum + value, 0) 

export const Chartduration = () => {
  return (
    <>
      <div className="w-[300px] lg:w-[350px] lg:mx-0 mx-auto rounded ">
        <h1 className="text-center font-bold text-xl"></h1>
        <div className="text-cent  justify-center m-auto">
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
};