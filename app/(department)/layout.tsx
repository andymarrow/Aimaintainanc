import React from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const Layout = ({ children = [] }) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
