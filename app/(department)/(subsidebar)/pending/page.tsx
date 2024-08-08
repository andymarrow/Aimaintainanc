"use client";
import React, { useState } from "react";
import { requests } from "../data";
import Table from "../../_components/Table";
import Card from "../../_components/Card";

const PendingRequest = () => {
  const inprogressRequest = requests.filter(
    (request) => request.status === "inprogress"
  );
  const [viewType, setViewType] = useState("table");

  const handleToggleView = (view) => {
    setViewType(view);
  };

  return (
    <div>
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
        <Table requests={inprogressRequest} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inprogressRequest.map((request, index) => (
            <Card key={index} requests={request} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingRequest;
