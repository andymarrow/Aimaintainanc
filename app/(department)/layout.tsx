import React from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const Layout = ({ children = [] }) => {
  return (
    <div className="min-h-screen flex">
      <div className="mr-72 hidden md:block">
        <Sidebar />
      </div>
      <div className="flex  flex-grow flex-col pt-3">
        <Navbar />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
