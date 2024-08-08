"use client";

import { Button } from "@/components/ui/button";

import React, { useState } from 'react';
import { TechnicianInfoComplitedjob } from "../data";
import FeedbackCards from "../../_componenets/FeedbackCards";

const EmployeeFeedbackPage = () => {

  const [viewType, setViewType] = useState("table");


 
  const handleToggleView = (view) => {
    setViewType(view);
  };
    
    return ( 
      <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Employee's Feedback 
      </h1>
   

      <FeedbackCards requests={TechnicianInfoComplitedjob} />




</div>
);
};
 
export default EmployeeFeedbackPage;