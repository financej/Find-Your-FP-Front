import React from "react";
import { ChartContainer, BarPlot } from "@mui/x-charts";

const uData = [4000, 3000];
const xLabels = ["Page A", "Page B"];

const Chart = () => {
  return (
    <ChartContainer
      width={400}
      height={200}
      series={[{ data: uData, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
  );
};

export default Chart;
