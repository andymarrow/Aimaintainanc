"use client";
import React from "react";
import { Navbar } from "../../../_componenets/AdminComp/navbar";
import DepTable from "../../../_componenets/AdminComp/table";
import { Sidebar } from "../../../_componenets/AdminComp/sidbar";
import { requests } from "../../../data";
function page() {
  const deactivated = requests.filter(
    (request) => request.status === "Deactivated"
  );
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-60 fixed inset-y-0 w-full  top-0 z-50">
        <Navbar />
      </div>

      <div className="hidden md:flex h-full w-56 flex-col fixed top-0 inset-y-0 z-40 ml-4">
        <Sidebar />
      </div>

      <div className="pt-[80px] md:pl-60">
        <div className=" p-4">
          <DepTable requests={deactivated} />
        </div>
      </div>
    </div>
  );
}

export default page;
