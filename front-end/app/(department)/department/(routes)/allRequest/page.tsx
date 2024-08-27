"use client";

import React from "react";
import Table from "../../_components/Table";
import Card from "../../_components/Card";
import { useState } from "react";
import { requests } from "../../data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const AllRequest = () => {
  const [viewType, setViewType] = useState("table");
  const [sortBy, setSortBy] = useState("Urgency");

  const router = useRouter();

  const department = "IT";
  const requestsByDepartment = requests.filter(
    (request) => request.department === department
  );

  const handleToggleView = (view) => {
    setViewType(view);
  };
  const handleSort = (e) => {
    const sortField = e.target.value;
    setSortBy(sortField);
  };

  const sortedRequests = requestsByDepartment.slice().sort((a, b) => {
    if (sortBy === "Urgency") {
      return a.Urgency.localeCompare(b.Urgency);
    } else if (sortBy === "Status") {
      return a.status.localeCompare(b.status);
    } else if (sortBy === "RequestType") {
      return a.requestType.localeCompare(b.requestType);
    }
    return 0;
  });
  const handleClickRoute = (id: Number) => {
    router.push(`/department/api/newForm/id`);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex mb-4">
          <button
            onClick={() => handleToggleView("table")}
            className={`px-4 py-2 mr-2 hidden md:block ${
              viewType === "table"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            } rounded-md`}
          >
            Table
          </button>
          <button
            onClick={() => handleToggleView("card")}
            className={`md:block px-4 py-2 hidden ${
              viewType === "card"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            } rounded-md`}
          >
            Card
          </button>
        </div>
        <div className="flex gap-5">
          <div className="flex  border border-gray-300 bg-blue-900 text-center items-center text-white p-2 rounded-lg">
            <div className="text-gray-200 text-center">
              <Plus />
            </div>
            <div>
              <button
                className="text-gray-200 items-end flex-row"
                onClick={() => handleClickRoute()}
              >
                New Request
              </button>
            </div>
          </div>
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
      {/* New Request button */}

      {viewType === "table" ? (
        <div >
        <Table requests={sortedRequests} />
        </div>
      ) : (
        <Card requests={sortedRequests} />
      )}
    </div>
  );
};
export default AllRequest;
