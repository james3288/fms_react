import React from "react";
import ReactECharts from "echarts-for-react";

const Chart: React.FC = () => {
  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["Department", "CLEANED", "UNCLEANED", "TOTAL"],
        ["ITD", 5, 2, 7],
        ["EMD", 4, 6, 10],
        ["PCM", 4, 6, 10],
        ["ACC", 8, 6, 14],
        ["ENGD", 16, 16, 16],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };

  return <ReactECharts option={option} />;
};

export default Chart;
