import React, { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ReactApexChart from 'react-apexcharts';

// Functional Component for the Heatmap Chart
const HeatmapChart = () => {
  const generateData = (count, range) => {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = (i + 1).toString(); // Corrected line
      const y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      series.push({ x, y });
      i++;
    }
    return series;
  };

  const [chartData] = useState({
    series: [
      { name: 'Monday', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Tuesday', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Wednesday', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Thursday', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Friday', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Saturday', data: generateData(18, { min: 0, max: 90 }) },
      { name: 'Sunday', data: generateData(18, { min: 0, max: 90 }) },
      // { name: 'Metric8', data: generateData(18, { min: 0, max: 90 }) },
      // { name: 'Metric9', data: generateData(18, { min: 0, max: 90 }) },
    ],
    options: {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#008FFB'],
      title: {
        text: 'HeatMap Chart (Single color)',
      },
    },
  });

  return (
    <div>
      <div id="heatmap-chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="heatmap" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

// Class-Based Component for the Area Chart
class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="area-chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

const Dashboard = () => {
  return (
    <DashboardLayout>
      <AreaChart />
      <HeatmapChart />
    </DashboardLayout>
  );
};

export default Dashboard;
