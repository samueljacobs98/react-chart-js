import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { getNumberInRange } from "../../utils/utils";
ChartJS.register(...registerables);

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      grid: {
        color: "rgba(255, 255, 255, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.4)",
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
        color: "rgba(255, 255, 255, 0.4)",
        borderColor: "rgba(255, 255, 255, 0.4)",
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => getNumberInRange(-1000, 1000)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => getNumberInRange(-1000, 1000)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

const MultiLineChart = () => {
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

export default MultiLineChart;
