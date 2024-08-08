"use client"
import { useState, ChangeEvent } from 'react';
import { BarChart2, CheckSquare, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PieChart from "@/components/PieChart";
import BarChart from "@/components/BarChart";// Assuming you have chart components
import CountUp from 'react-countup';

const AnalysisPage = () => {
    const [selectedDate, setSelectedDate] = useState<string>('2024-07');

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

  // Data for the Completed card
  const completedData = {
    sessions: [
        {
            label: "Recieved",
            size: 60,
            c: 25705.2,
            color: "green-500",
        },
        {
            label: "Completed",
            size: 30,
            c: 12852.6,
            color: "green-400"
        },
        {
            label: "Do Latter",
            size: 8,
            c: 3427.36,
            color: "green-300"
        },
        {
            label: "Rejected",
            size: 2,
            c: 856.84,
            color: "green-200"
        },
    ]
};
  // Handle date change
  const handleDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
    // Implement your logic to update the data based on the selected date
  };
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
            <h2 className="text-lg font-bold mb-4">Pie Chart Analysis</h2>
            <div className="h-64">
              <PieChart /> {/* Display Pie Chart */}
            </div>
          </div>
          <div className="bg-slate-200 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Bar Chart Analysis</h2>
            <div className="h-64">
              <BarChart /> {/* Display Bar Chart */}
            </div>
          </div>
        </div>
        {/* Third Row: Completed Analysis Card */}
        <div className="bg-slate-200 shadow-md rounded-lg p-6 text-center">
      <div className="flex justify-end">
        <div className="relative">
          <select
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 focus:outline-none"
          >
            <option value="2024-07">July 2024</option>
            <option value="2024-06">June 2024</option>
            <option value="2024-05">May 2024</option>
            <option value="2024-04">April 2024</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-4 text-green-600">Total Completed Requests</h2>
      <div className="grid grid-cols-2 gap-4 h-64">
        {completedData.sessions.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-medium">{item.label}</span>
            <CountUp
              start={0}
              end={item.c}
              duration={1.6}
              separator=","
              prefix="$"
              className="text-lg font-bold"
            />
          </div>
        ))}
      </div>
    </div>
  </div>  
    )
}
 
export default AnalysisPage;