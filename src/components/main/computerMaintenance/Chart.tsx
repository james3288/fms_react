import React from "react";
import ReactECharts from "echarts-for-react";

const Chart: React.FC = () => {
  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["Department", "CLEANED", "UNCLEANED"],
        ["ITD", 43.3, 50],
        ["EMD", 83.1, 73.4],
        ["ACCT", 86.4, 65.2],
        ["SAD", 72.4, 53.9],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }],
  };

  return <ReactECharts option={option} />;
};

export default Chart;
