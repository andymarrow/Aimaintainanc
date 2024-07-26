"use client"

import { BarChart2, CheckSquare, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PieChart, BarChart } from "@/components/ui/chart"; // Assuming you have chart components

export default function Home() {
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
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
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
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Pie Chart Analysis</h2>
          <PieChart /> {/* Replace with your actual PieChart component */}
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Bar Chart Analysis</h2>
          <BarChart /> {/* Replace with your actual BarChart component */}
        </div>
      </div>

      {/* Third Row: Table */}
      <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Requester Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone No</th>
              <th className="p-3 text-left">Problem</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Device Type</th>
              <th className="p-3 text-left">Model No</th>
              <th className="p-3 text-left">Urgency</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows; replace with dynamic data */}
            <tr>
              <td className="p-3">John Doe</td>
              <td className="p-3">john.doe@example.com</td>
              <td className="p-3">123-456-7890</td>
              <td className="p-3">Network Issue</td>
              <td className="p-3">Unable to connect to the internet</td>
              <td className="p-3">IT</td>
              <td className="p-3">Router</td>
              <td className="p-3">XYZ123</td>
              <td className="p-3">High</td>
              <td className="p-3">Resolve</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
