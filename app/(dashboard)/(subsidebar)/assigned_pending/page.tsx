"use client";

import { Button } from "@/components/ui/button";

import React, { useState } from 'react';
import { requestInformation } from "../data";
import Table from "../../_componenets/Table";
import Card from "../../_componenets/Table";
const AssignedPendigPage = () => {
  
  const AssignedAndPendingRequest = requestInformation.filter(
    (request) => request.status === "assigned"
  );
  const [viewType, setViewType] = useState("table");


 
  const handleToggleView = (view) => {
    setViewType(view);
  };

   return (
    <div className="p-6 space-y-6">
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
      <Table requests={AssignedAndPendingRequest} />
    ) : (
          <Card requests={AssignedAndPendingRequest} />
        )
 
    }
  </div>
   );
 };
 
export default AssignedPendigPage;