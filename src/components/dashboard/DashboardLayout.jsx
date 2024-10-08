import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-hidden font-tertiaryFont">
      <div className="w-full h-screen flex">
      
      <div className="w-[20%] bg-blue-100 h-full px-7">
        <SideBar />
        </div>


        <div className="w-[80%] h-full overflow-auto">
          <nav className="py-6 px-8 text-xl font-semibold shadow">
            <p>Welcome back User!</p>
          </nav>

            <div className="p-6">
              {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
