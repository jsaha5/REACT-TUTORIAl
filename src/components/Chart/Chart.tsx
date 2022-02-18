import { ChartData } from "../../models/ChartData";
import "./Chart.css";
import ChartBar from "./ChartBar";

type ChartProps = {
  dataPoints: ChartData[];
};
const Chart = (props: ChartProps) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
