import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const BlueRadialBarXL = () => {
  const [chartData] = useState({
    series: [80],
    options: {
      chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: {
          enabled: true,
        },
        toolbar: {
          show: false, // Hides the toolbar
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 5,
            size: "50%",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            imageClipped: true,
            position: "front",
          },
          track: {
            background: "#44A9F133",
            strokeWidth: "100%",
            margin: 0,
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
      fill: {
        type: "",
        gradient: {
          shade: "light",
          shadeIntensity: 0.5,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: [""],
      colors: ["#44A9F1"],
    },
  });

  useEffect(() => {
    // Additional setup or data fetching logic can be added here
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={250}
      />
    </div>
  );
};

export default BlueRadialBarXL;
