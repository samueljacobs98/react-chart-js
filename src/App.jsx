import LineChart from "./charts/LineChart/LineChart";
import BarChart from "./charts/BarChart/BarChart";
import BubbleChart from "./charts/BubbleChart/BubbleChart";
import DoughtnutChart from "./charts/DoughtnutChart/DoughtnutChart";
import "./App.css";
import MultiLineChart from "./charts/MultiLineChart/MultiLineChart";
import PolarChart from "./charts/PolarChart/PolarChart";
import RadarChart from "./charts/RadarChart/RadarChart";
import ScatterChart from "./charts/ScatterChart/ScatterChart";

function App() {
  return (
    <div className="App">
      <ScatterChart />
      <RadarChart />
      <PolarChart />
      <MultiLineChart />
      <LineChart />
      <BarChart />
      <DoughtnutChart />
      <BubbleChart />
    </div>
  );
}

export default App;
