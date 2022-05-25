import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

// https://react-chartjs-2.js.org/components/bar

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(77,110,215)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
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
};

const LineChart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Line Chart</h1>
      <div
        style={{
          width: "400px",
          backgroundColor: "rgb(34,31,48)",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <Line data={data} options={options} redraw={true} />
      </div>
    </div>
  );
};

export default LineChart;
