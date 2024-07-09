import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen font-tertiaryFont">
      <div className="w-full h-screen flex">
      
      <div className="w-[23%] bg-[#3F3649] h-full px-7">
        <SideBar />
        </div>


        <div className="w-[77%] h-full">
          <nav className="py-6 px-8 text-xl font-semibold shadow">
            <p>Welcome back User!</p>
          </nav>

            <div>
              {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
