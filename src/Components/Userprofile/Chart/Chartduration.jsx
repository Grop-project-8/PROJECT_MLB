import React ,{useState,useEffect}from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut,Bar } from "react-chartjs-2";
import axios from "axios";
import { Colors } from "chart.js";
import { CategoryScale, Chart, registerables } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);
Chart.register(CategoryScale);
Chart.register(...registerables);
Chart.register(Colors);



export const Chartduration = () => {

  const [chartData, setChartData] = useState({});
  console.log("chartData",chartData);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "http://localhost:8000/getUserperday";
      try {
        const response = await axios.get(apiUrl, { withCredentials: true });
        const data = response.data;
        setChartData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

const data = {
  labels: Object.keys(chartData),
  datasets: [
    {
      data: Object.values(chartData),
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


  return (
    <>
      <div className="w-[300px] lg:w-[350px] lg:mx-0 mx-auto rounded ">
        <div className="text-cent  justify-center m-auto">
        <Doughnut data={data} />
        </div>
        <h3 className="text-center text-[25px]">Graph comparing each type of exercise</h3>

      </div>
    </>
  );
};