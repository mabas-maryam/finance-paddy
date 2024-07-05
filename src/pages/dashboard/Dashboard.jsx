import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen font-tertiaryFont">
      <div className="w-full h-screen flex">
        <div className="w-[23%] bg-[#3F3649] h-full px-7">
          <header className=" pt-6">
            <Link
              to="/"
              className=" text-white font-primaryFont text-2xl font-semibold"
            >
              Finance <span className="text-secondary">Paddy</span>
            </Link>
          </header>

          <div className="text-white pt-20">
            <p className="font-semibold text-lg">Menu</p>

            <ul className=" mt-4 flex flex-col space-y-6">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
                Dashboard
              </li>
              <li>Budgeting</li>
              <li>Transactions</li>
              <li>Saving Goals</li>
              <li>Report</li>
              <li>Forums</li>
              <li>Financial Literacy</li>
            </ul>

            <p className="mt-16">LOGOUT</p>
          </div>
        </div>

        <div className="w-[77%] h-full">
          <nav className="py-6 px-8 text-xl font-semibold shadow">
            <p>Welcome back User!</p>
          </nav>

          <div className="mt-6 px-10">
            <div className="grid grid-cols-4">
              <div className="bg-white p-4 border shadow-md flex flex-col space-y-4">
                <p className="text-sm">Total Income</p>

                <p className="font-bold text-2xl">₦0</p>

                <div className="flex justify-between">
                  <p className="text-primary font-semibold">100%</p>
                  <span className="p-2 rounded-md bg-purple-200">
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
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
