import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = ({ percentages }) => {
  return (
    <div className="h-1/2">
      <Pie
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
        data={{
          labels: ["Masa grasa", "Masa osea", "Masa residual", "Masa muscular"],
          datasets: [
            {
              label: "%",
              data: [...percentages],
              borderWidth: 1,
              borderColor: "#FFFFFF",
              backgroundColor: ["#c8b6ff", "#e7c6ff", "#bbd0ff", "#ffd6ff"],
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
