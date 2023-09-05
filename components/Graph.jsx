import { Chart } from "chart.js";
import { useEffect } from "react";

const Graph = ({ porcentajes, calculado }) => {
  useEffect(() => {
    const pie = document.getElementById("pie-chart").getContext("2d");

    const chart = new Chart(pie, {
      type: "pie",
      data: {
        labels: ["Masa grasa", "Masa osea", "Masa residual", "Masa muscular"],
        datasets: [
          {
            label: "%",
            data: [...porcentajes],
            borderWidth: 1,
            borderColor: "#FFFFFF",
            backgroundColor: ["#c8b6ff", "#e7c6ff", "#bbd0ff", "#ffd6ff"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "top",
          },
          title: { display: true, text: "Porcentajes de masa" },
        },
        responsive: true,
      },
    });
  }, [calculado]);

  return (
    <div className="w-1/2">
      <canvas id="pie-chart"></canvas>
    </div>
  );
};

export default Graph;
