import React, { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ReactApexChart from "react-apexcharts";

// Functional Component for the Heatmap Chart
const HeatmapChart = () => {
  const generateData = (count, range) => {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = (i + 1).toString(); // Corrected line
      const y =
        Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      series.push({ x, y });
      i++;
    }
    return series;
  };

  const [chartData] = useState({
    series: [
      { name: "Sunday", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Saturday", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Friday", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Thursday", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Wednesday", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Tuesday", data: generateData(18, { min: 0, max: 90 }) },
      { name: "Monday", data: generateData(18, { min: 0, max: 90 }) },
    ],
    options: {
      chart: {
        height: 350,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#008FFB"],
    },
  });

  return (
    <div>
      <div id="heatmap-chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="heatmap"
          height={350}
        />
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
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
      // Add your budget data here
      budgetData: [
        {
          title: "Budget Progress",
          description: "Needs Budget",
          progress: "$0/",
          total: "$20,000",
        },
        {
          title: "Savings Progress",
          description: "Wants Budget",
          progress: "$0/",
          total: "$1,200",
        },
        {
          title: "Investment Progress",
          description: "Savings Budget",
          progress: "$0/",
          total: "$2,000",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className=" border px-4 py-4 ml-2 space-y-1">
          <h2 className="tex-sm">Total Income</h2>
          <p className="font-semibold text-lg">$3,000</p>
          <div className="flex justify-between">
            <p className="text-primary">100%</p>
            <p className="bg-blue-100 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#46325D"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                ></path>
              </svg>
            </p>
          </div>
        </div>

      <div className="flex w-full">
        {/* Empty div - Takes 30% of the 77% space */}
        <div
          id="empty-div"
          className="w-[32%] ml-2 mt-2 border border-blue-200 h-full shadow-xl shadow-blue-200 px-10 py-4 space-y-4"
        >
          {/* Map through budgetData */}
          {this.state.budgetData.map((item, index) => (
            <div key={index} className="">
              <h2 className="font-semibold flex">{item.title}</h2>
              <p className="font-light text-sm">{item.description}</p>
              <div className="border p-2 bg-blue-100 rounded-full "></div>
              <div className="flex justify-between font-normal text-sm">
                <p>{item.progress}</p>
                <p>{item.total}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart div - Takes 53.9% of the screen */}
        <div className="w-[68%] ml-6 mt-2">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
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
