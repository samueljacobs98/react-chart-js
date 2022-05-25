import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

// https://react-chartjs-2.js.org/components/doughnut

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "A doughnut Chart",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(214, 92, 115, 0.2)",
        "rgba(77, 181, 225, 0.2)",
        "rgba(255, 227, 192, 0.2)",
        "rgba(105, 209, 199, 0.2)",
        "rgba(109, 54, 202, 0.2)",
        "rgba(250, 194, 154, 0.2)",
      ],
      borderColor: [
        "rgba(214, 92, 115, 1)",
        "rgba(77, 181, 225, 1)",
        "rgba(255, 227, 192, 1)",
        "rgba(105, 209, 199, 1)",
        "rgba(109, 54, 202, 1)",
        "rgba(250, 194, 154, 1)",
      ],
      // borderWidth: 4,
      hoverOffset: 4,
      // borderAlign: "inner", // or center
      borderJoinStyle: "round", // round | bevel | miter
      hoverBackgroundColor: "rgba(125, 187, 115, 0.2)",
      offset: 10,
      spacing: 10,
      cutout: "90%",
    },
  ],
};

const DoughtnutChart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Doughnut Chart</h1>
      <div
        style={{
          width: "400px",
          backgroundColor: "rgb(34,31,48)",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughtnutChart;
