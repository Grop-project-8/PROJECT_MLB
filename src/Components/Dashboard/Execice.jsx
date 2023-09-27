import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Exercise = () => {
  const chartRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    // Check if there's an existing chart and destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverOffset: 4,
        },
      ],
    };

    // Create a new chart
    const newChart = new window.Chart(chartRef.current, {
      type: 'doughnut',
      data,
    });

    // Update the reference to the new chart instance
    chartRef.current = newChart;
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Exercise;
