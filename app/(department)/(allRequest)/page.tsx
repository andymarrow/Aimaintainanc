"use client";

import React from "react";
import Table from "../_components/Table";
import Card from "../_components/Card";
import { useState } from "react";
import { requests } from "../data";

const AllRequest = () => {
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
        <Table requests={requests} />
      ) : (
        <Card requests={requests} />
      )}
    </div>
  );
};
export default AllRequest;
