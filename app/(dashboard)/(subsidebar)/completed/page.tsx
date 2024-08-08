"use client";

import { Button } from "@/components/ui/button";

import React, { useState } from 'react';
import { TechnicianInfoComplitedjob } from "../data";
import CompletedTable from "../../_componenets/completedTable";
import CompletedCards from "../../_componenets/completedCards";
const CompletedPAge = () => {

  const [viewType, setViewType] = useState("table");


 
  const handleToggleView = (view) => {
    setViewType(view);
  };

  return (
    <div className="p-6 space-y-6">
       <div className="container mx-auto ">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  Completed Jobs
                </h1>

            </div>
    <div className="flex justify-start mb-4">
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
    {viewType === "table" ? (
      <CompletedTable requests={TechnicianInfoComplitedjob} />
    ) : (
          <CompletedCards requests={TechnicianInfoComplitedjob} />
        )
 
    }
     </div>
  );
};

export default CompletedPAge;
