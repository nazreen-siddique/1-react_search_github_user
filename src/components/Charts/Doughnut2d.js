import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartComponent = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width:" 100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "stars per language",
        theme: "candy",
        decimals: 0,
        showPercentValues : 0 ,
        doughnutRadius: "45%",
      },
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
export default chartComponent;
