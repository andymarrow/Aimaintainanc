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
     

      <Table requests={PendingRequest} />
    </div>
  );
}
