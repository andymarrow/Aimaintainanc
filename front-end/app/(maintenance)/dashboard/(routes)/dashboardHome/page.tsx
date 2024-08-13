"use client"

import { BarChart2, CheckSquare, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";// Assuming you have chart components
import { requestInformation } from "../../(subsidebar)/data";
import Card from "../../_componenets/Card";
import Table from "../../_componenets/Table";

export default function Home() {
  const PendingRequest = requestInformation.filter(
    (request) => request.status === "view"
  );
  // Example data
  const cardData = [
    {
      icon: BarChart2,
      number: "15+",
      text: "Assigned & Pending",
    },
    {
      icon: Users,
      number: "18+",
      text: "Total Requests",
    },
    {
      icon: FileText,
      number: "10+",
      text: "Requesting Department",
    },
    {
      icon: CheckSquare,
      number: "12+",
      text: "Completed",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* First Row: Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-slate-200 shadow-md rounded-lg p-6 flex items-center space-x-4">
            <div className="text-blue-500">
              <card.icon size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold">{card.number}</div>
              <div className="text-gray-500">{card.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-200 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4 ">Pie Chart Analysis</h2>
          <div className="flex h-64 justify-center">
            <PieChart /> {/* Display Pie Chart */}
          </div>
        </div>
        <div className="bg-slate-200 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Bar Chart Analysis</h2>
          <div className="flex justify-center h-64">
            <BarChart /> {/* Display Bar Chart */}
          </div>
        </div>
      </div>

      <Table requests={PendingRequest} />
    </div>
  );
}
