"use client";

import { Button } from "@/components/ui/button";

import React, { useState } from 'react';
import { requestInformation } from "../data";
import Table from "../../_componenets/Table";
import Card from "../../_componenets/Card";

const AssignPage = () => {
  const PendingRequest = requestInformation.filter(
    (request) => request.status === "view"
  );
  const [viewType, setViewType] = useState("table");


 
  const handleToggleView = (view) => {
    setViewType(view);
  };

  
    
  return (
    <div className="p-6 space-y-6">
      {/* First Row: Cards */}
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
        <Table requests={PendingRequest} />
      ) : (
              <Card requests={PendingRequest} />
      )}


  
      
    </div>
  );
};

export default AssignPage;


