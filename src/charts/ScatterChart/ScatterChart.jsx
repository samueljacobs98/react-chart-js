import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { getNumberInRange } from "../../utils/utils";
ChartJS.register(...registerables);

const options = {
  scales: {
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.4)",
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.4)",
        beginAtZero: true,
      },
    },
  },
};

const data = {
  datasets: [
    {
      label: "A dataset",
      data: Array.from({ length: 100 }, () => ({
        x: getNumberInRange(-100, 100),
        y: getNumberInRange(-100, 100),
      })),
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const ScatterChart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Scatter Chart</h1>
      <div
        style={{
          width: "400px",
          backgroundColor: "rgb(34,31,48)",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default ScatterChart;
