"use client";
import React, { useState } from "react";
import { requests } from "../../data";
import Table from "../../_components/Table";
import Card from "../../_components/Card";

const AcceptedRequest = () => {
  const [viewType, setViewType] = useState("table");
  const [sortBy, setSortBy] = useState("Urgency");
  const department = "IT";

  const departmentRequests = requests.filter(
    (request) => request.department === department
  );

  const acceptedRequest = departmentRequests.filter(
    (request) => request.status === "accepted"
  );

  const handleToggleView = (view) => {
    setViewType(view);
  };

  const handleSort = (e) => {
    const sortField = e.target.value;
    setSortBy(sortField);
  };

  const sortedRequests = acceptedRequest.slice().sort((a, b) => {
    if (sortBy === "Urgency") {
      return a.Urgency.localeCompare(b.Urgency);
    } else if (sortBy === "Status") {
      return a.status.localeCompare(b.status);
    } else if (sortBy === "RequestType") {
      return a.requestType.localeCompare(b.requestType);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex mb-4">
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
        <div>
          <select
            value={sortBy}
            onChange={handleSort}
            className="border border-gray-300 p-2 rounded-lg"
          >
            <option value="Urgency">sort by Urgency</option>
            <option value="Status">sort by Status</option>
            <option value="RequestType">sort by Request Type</option>
          </select>
        </div>
      </div>
      {viewType === "table" ? (
        <Table requests={sortedRequests} />
      ) : (
        <Card requests={sortedRequests} />
      )}
    </div>
  );
};

export default AcceptedRequest;
