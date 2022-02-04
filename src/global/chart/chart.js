import React from "react";
import PieChart from "react-apexcharts";
const Chart = ({ labels, series, colors }) => {
  const options = {
    labels: labels,
    colors: colors,
    legend: false,
    stroke: {
      width: 1,
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: undefined,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
              show: true,
              showAlways: true,
             name:{
               show:true,
               color: "#FFFFFF",
               fontSize:"20px",
             },
             value:{
              show:true,
              color: "#FFFFFF",
              fontSize:"20px"
            },
            total:{
              show:true,
              color: "#FFFFFF",
              fontSize:"20px"
            },
            }
        },
        expandOnClick: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 220,
          },
        },
      },
    ],
  };
  return (
    <PieChart options={options} series={series} type="donut" height={320} />
  );
};

export default Chart;
