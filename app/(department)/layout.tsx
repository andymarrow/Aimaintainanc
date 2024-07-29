import React from "react";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const layout = ({ children }) => {
  return (
    <div className="container flex">
      <div className="max-w-sm flex-1 bg:bgSoft p-6">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
