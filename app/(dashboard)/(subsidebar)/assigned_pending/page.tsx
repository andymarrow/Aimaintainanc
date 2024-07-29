"use client";

import { Button } from "@/components/ui/button";

import React, { useState } from 'react';

const AssignedPendigPage = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
 // State to control which view to show in the modal
 const [isTechnicianView, setIsTechnicianView] = useState(false);

 const showAssignForm = () => {
   setIsModalOpen(true);
   setIsTechnicianView(false);
 };

 const hideAssignForm = () => {
   setIsModalOpen(false);
 };

 const showTechnicianView = () => {
   setIsTechnicianView(true);
 };

 const showRequestorView = () => {
   setIsTechnicianView(false);
 };
   return (
     <div className="p-6 space-y-6">
       {/* First Row: Cards */}
 
       <div className="bg-gray-400 shadow-md rounded-lg p-6 overflow-x-auto scrollbar-thin scrollbar-thumb scrollbar-track scrollbar-rounded">
         <table className="w-full min-w-max">
           <thead className="bg-gray-500 rounded-lg ">
             <tr className=" rounded">
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
               <td className="p-3">
                 <button
                   type="button"
                   className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-xl mt-4"
                   onClick={showAssignForm}
                 >
                   Pending
                 </button>
               </td>
              
             </tr>
             {/* Add more rows as needed */}
           </tbody>
         </table>
       </div>
       <div className="flex justify-end mt-8">
       <nav aria-label="Page navigation example">
         <ul className="inline-flex -space-x-px text-base h-10">
           <li>
             <a
               href="#"
               className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               Previous
             </a>
           </li>
           <li>
             <a
               href="#"
               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               1
             </a>
           </li>
           <li>
             <a
               href="#"
               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               2
             </a>
           </li>
           <li>
             <a
               href="#"
               aria-current="page"
               className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
             >
               3
             </a>
           </li>
           <li>
             <a
               href="#"
               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               4
             </a>
           </li>
           <li>
             <a
               href="#"
               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               5
             </a>
           </li>
           <li>
             <a
               href="#"
               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
             >
               Next
             </a>
           </li>
         </ul>
       </nav>
       </div>
       {/* the great modal toggle */}
       {isModalOpen && (
  <div id="Assign-Form-modal" className="fixed inset-0 overflow-y-auto pt-[82px] z-10 md:pl-60">
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-gray-400 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-lg w-full">
        <div className="flex justify-end mb-4">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl"
            onClick={hideAssignForm}
          >
            x
          </button>
        </div>

        {!isTechnicianView ? (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Assign & Pending Form</h2>
            <p className="mb-4">This form is for assigning a technician for maintenance.</p>
            <p className="mb-4">You are assigning a technician for <span className="font-bold">John Doe</span>'s request?</p>

            <div className="bg-gray-500 rounded-lg p-4">
              <div className="bottom-data">
                <div className="orders">
                  <div className="header flex items-center mb-4">
                    <i className="bx bx-receipt text-2xl"></i>
                    <h3 className="ml-3 text-xl font-bold">Checking Assignment</h3>
                  </div>

                  <form className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="RequesterName" className="block mb-1 font-medium">Requester Name</label>
                        <input
                          type="text"
                          className="border rounded-md px-3 py-2 w-full"
                          id="RequesterName"
                          placeholder="Enter Requester Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="Email" className="block mb-1 font-medium">Email</label>
                        <input
                          type="email"
                          className="border rounded-md px-3 py-2 w-full"
                          id="Email"
                          placeholder="Enter Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="DepartmentCode" className="block mb-1 font-medium">Department Code</label>
                        <input
                          type="text"
                          className="border rounded-md px-3 py-2 w-full"
                          id="DepartmentCode"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="DeviceType" className="block mb-1 font-medium">Device Type</label>
                        <input
                          type="text"
                          className="border rounded-md px-3 py-2 w-full"
                          id="DeviceType"
                          placeholder="Enter Device Type"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="Problem" className="block mb-1 font-medium">Problem</label>
                        <input
                          type="text"
                          className="border rounded-md px-3 py-2 w-full"
                          id="Problem"
                          placeholder="Enter Problem"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="Department" className="block mb-1 font-medium">Department</label>
                        <input
                          type="text"
                          className="border rounded-md px-3 py-2 w-full"
                          id="Department"
                          placeholder="Enter Department"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="Description" className="block mb-1 font-medium">Description</label>
                        <textarea
                          className="border rounded-md px-3 py-2 w-full"
                          id="Description"
                          placeholder="Enter Description"
                          required
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="ModelNo" className="block mb-1 font-medium">Model No</label>
                        <input
                          type="text"
                          className="border rounded-md px-3 py-2 w-full"
                          id="ModelNo"
                          placeholder="Enter Model No"
                          required
                        />
                      </div>
                    </div>

                    

                    <div className="flex justify-center mt-4">
                    <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mr-2"
                onClick={showTechnicianView}
              >
                Technician View
              </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl"
                onClick={hideAssignForm}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Technician Details</h2>
            <p className="mb-4">Enter technician details below:</p>

            <div className="bg-gray-500 rounded-lg p-4">
              <form className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="TechnicianName" className="block mb-1 font-medium">Technician Name</label>
                    <input
                      type="text"
                      className="border rounded-md px-3 py-2 w-full"
                      id="TechnicianName"
                      placeholder="Enter Technician Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="TechnicianEmail" className="block mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      className="border rounded-md px-3 py-2 w-full"
                      id="TechnicianEmail"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="RequestDate" className="block mb-1 font-medium">Request Date</label>
                    <input
                      type="date"
                      className="border rounded-md px-3 py-2 w-full"
                      id="RequestDate"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-3">
                  <h1 className="text-center font-bold ">Pending</h1>
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                    onClick={showRequestorView}
                  >
                    Requestor View
                  </button>
                </div>
              </form>
            </div>

            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl"
                onClick={hideAssignForm}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
)}


     </div>
   );
 };
 
export default AssignedPendigPage;