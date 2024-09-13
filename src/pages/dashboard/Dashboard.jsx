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
      // Add your income and budget data here
      incomeData: [
        {
          title: "Total Income",
          amount: "$30,000",
          percentage: "100%",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#46325D"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              ></path>
            </svg>
          ),
        },
        {
          title: "Max. Needs Budget",
          amount: "$10,000",
          percentage: "50%",
          icon: (
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
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
              ></path>
            </svg>
          ),
        },
        {
          title: "Max. Wants Budget",
          amount: "$1,200",
          percentage: "30%",
          icon: (
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              ></path>
            </svg>
          ),
        },
        {
          title: "Max. Savings Budget",
          amount: "$2,000",
          percentage: "20%",
          icon: (
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
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              ></path>
            </svg>
          ),
        },
      ],
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
        <div className="flex w-full space-x-4 mt-2 mb-4">
          {/* Map through incomeData */}
          {this.state.incomeData.map((item, index) => (
            <div
              key={index}
              className="border px-4 py-4 ml-2 space-y-1 w-1/4 shadow-md shadow-blue-100"
            >
              <h2 className="text-sm">{item.title}</h2>
              <p className="font-semibold text-lg">{item.amount}</p>
              <div className="flex justify-between">
                <p className="text-primary">{item.percentage}</p>
                <p className="bg-blue-100 p-1">{item.icon}</p>
              </div>
            </div>
          ))}
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
