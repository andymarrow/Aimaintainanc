"use client";

import { Button } from "@/components/ui/button";

import React, { useState } from 'react';
import { TechnicianInfoComplitedjob } from "../data";
import CompletedTable from "../../_componenets/completedTable";
import CompletedCards from "../../_componenets/completedCards";
const CompletedPAge = () => {

  const [viewType, setViewType] = useState("table");
 const [sortBy, setSortBy] = useState("technicianName");
  
  const handleSort = (e) => {
    const sortField = e.target.value;
    setSortBy(sortField);
  };

    const sortedRequests = TechnicianInfoComplitedjob.slice().sort((a, b) => {
    if (sortBy === "technicianName") {
      return a.technicianName.localeCompare(b.technicianName);
    }
    else if (sortBy === "EmployeeRating") {
      return a.EmployeeRating.localeCompare(b.EmployeeRating);
    }
    return 0;
  });

 
  const handleToggleView = (view) => {
    setViewType(view);
  };

  return (
    <div className="p-6 space-y-6">
        <div className="flex justify-between mb-4">
          <div className="flex">
            <button
              onClick={() => handleToggleView("table")}
              className={`px-4 py-2 mr-2 ${
                viewType === "table"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              } rounded-md`}
            >
              Table
            </button>
            <button
              onClick={() => handleToggleView("card")}
              className={`px-4 py-2 ${
                viewType === "card"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              } rounded-md`}
            >
              Card
            </button>
          </div>
          <select
            value={sortBy}
            onChange={handleSort}
            className="border border-gray-300 p-2 rounded-lg"
          >
            <option value="technicianName">sort by Technician Name</option>
            <option value="EmployeeRating">sort by Employee Rating</option>
          </select>
      </div>
    {viewType === "table" ? (
      <CompletedTable requests={sortedRequests} />
    ) : (
          <CompletedCards requests={sortedRequests} />
        )
 
    }
     </div>
  );
};

export default CompletedPAge;
