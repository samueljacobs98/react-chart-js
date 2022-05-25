import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { getNumberInRange } from "../../utils/utils";
ChartJS.register(...registerables);

// https://react-chartjs-2.js.org/components/bar

const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: getNumberInRange(-100, 100),
        y: getNumberInRange(-100, 100),
        r: getNumberInRange(-5, 20),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: getNumberInRange(-100, 100),
        y: getNumberInRange(-100, 100),
        r: getNumberInRange(-5, 20),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

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
      },
    },
  },
  clip: 0,
};

const BubbleChart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Bubble Chart</h1>
      <div
        style={{
          width: "400px",
          backgroundColor: "rgb(34,31,48)",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <Bubble data={data} options={options} />
      </div>
    </div>
  );
};

export default BubbleChart;
