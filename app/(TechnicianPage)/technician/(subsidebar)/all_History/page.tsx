"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { requestInformation, TechnicianInfo } from "../data";
import Table from "../../_componenets/Table";
import Card from "../../_componenets/Card";

const DoLatterPage = () => {
  const technicianName = "Abebe Belete";

  // Find the technician's info
  const technician = TechnicianInfo.find(tech => tech.technicianName === technicianName);

  if (!technician) {
    return <div>Technician not found</div>;
  }

  // Extract pending and finished request IDs
  const pendingRequestIds = technician.workLoad.pending.map(work => parseInt(work.requestId));
  const finishedRequestIds = technician.workLoad.finished.map(work => parseInt(work.requestId));

 
  // Filter the request information based on the IDs
  const filteredRequests = requestInformation.filter(request =>
    pendingRequestIds.includes(request.id) || finishedRequestIds.includes(request.id)
  );

   //filter the doed later
   const filterDoedLatter = filteredRequests.filter(
    (request) => request.status === "assigned" ||  request.status === "completed" ,
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
        <Table requests={filterDoedLatter} />
      ) : (
        <Card requests={filterDoedLatter} />
      )}
    </div>
  );
};

export default DoLatterPage;
