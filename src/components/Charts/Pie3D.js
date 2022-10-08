import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartComponent = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: 400 ,
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "35%",
      },
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
export default chartComponent;
