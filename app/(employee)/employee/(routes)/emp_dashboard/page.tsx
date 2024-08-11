"use client";
import React from "react";
import { Navbar } from "../../_componenets/EmpComp/navbar";
import { Sidebar } from "../../_componenets/EmpComp/sidebar";
import { requests } from "../../empData";
import TabTable from "../../_componenets/EmpComp/TabTable";

const SettingsPage = () => {
  const employeeName = "Miki Alemu";

  // Find the employee's info
  const employee = requests.find((emp) => emp.requesterName === employeeName);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  // Filter requests to include only those belonging to the specific employee
  const filteredRequests = requests.filter(
    (req) => req.requesterName === employeeName
  );

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-60 fixed inset-y-0 w-full top-0 z-50">
        <Navbar />
      </div>

      <div className="hidden md:flex h-full w-56 flex-col fixed top-0 inset-y-0 z-40 ml-4">
        <Sidebar />
      </div>

      <div className="pt-[80px] md:pl-60">
        <TabTable requests={filteredRequests} />
      </div>
    </div>
  );
};

export default SettingsPage;
