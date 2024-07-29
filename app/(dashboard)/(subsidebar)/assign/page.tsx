"use client";

import { Button } from "@/components/ui/button";

import React, { useState } from 'react';


const AssignPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showAssignForm = () => {
    setIsModalOpen(true);
  };

  const hideAssignForm = () => {
    setIsModalOpen(false);
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
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl mt-4"
                  onClick={showAssignForm}
                >
                  Assign
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
      {isModalOpen && (
        <div id="Assign-Form-modal" className="fixed  inset-0 overflow-y-auto pt-[82px] z-1 md:pl-60">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-gray-400 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-lg w-full">
            <div className="flex justify-end mb-4">
              <button
                      className=" bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl"
                      onClick={hideAssignForm}
                    >
                      x
                    </button>
            </div>
            
              <h2 className="text-3xl font-bold mb-4 text-center">Assign Form</h2>
              <p className="mb-4">
                This form is for assigning a technician for a maintainance
              </p>
              <p className="mb-4">
                You are assigning a technician for <span className="font-bold">John Doe</span>'s Request?
              </p>
              <div className="m-8 bg-gray-500 rounded-lg p-8">
                <div className="bottom-data">
                  <div className="orders">
                    <div className="header flex items-center">
                      <i className="bx bx-receipt text-2xl"></i>
                      <h3 className="ml-3 text-xl font-bold text-center">View Request</h3>
                    </div>
                    <form className="mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="RequesterName" className="block mb-1 font-medium">Requestor Name</label>
                          <input
                            type="text"
                            className="border rounded-md px-3 py-2 w-full"
                            id="RequesterName"
                            placeholder="Enter RequesterName"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="Email" className="block mb-1 font-medium">Email</label>
                          <input
                            type="email"
                            className="border rounded-md px-3 py-2 w-full"
                            id="Email"
                            name="Email"
                            placeholder="Enter Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <label htmlFor="PhoneNo" className="block mb-1 font-medium">Department Code</label>
                          <input
                            type="text"
                            className="border rounded-md px-3 py-2 w-full"
                            id="PhoneNo"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="DeviceType" className="block mb-1 font-medium">Device Type</label>
                          <input
                            type="text"
                            className="border rounded-md px-3 py-2 w-full"
                            id="DeviceType"
                            placeholder="Enter DeviceType"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
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
                            name="Department"
                            placeholder="Enter Department"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                      <div >
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
                            name="ModelNo"
                            placeholder="Enter ModelNo"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex justify-center text-white">
                        <p>==================================</p>
                     </div>
                      
                      <div className=" mt-4">
                        <div>
                          <label htmlFor="TechnicanName" className="block mb-1 font-medium text-center">Technican Name</label>
                          <select
                            className="border rounded-md px-3 py-2 w-full"
                            id="TechnicanName"
                            required
                          >
                            <option value="">Technican Name</option>
                            <option value="Abebe">Abebe (C=4,P=3)</option>
                            <option value="Kebede">Kebede (C=4,P=3)</option>
                            <option value="Belete">Belete (C=4,P=3)</option>
                           
                          </select>
                        </div>
                        
                      
                      </div>
                      
                      
                      <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded-xl mt-4"
                      >
                        Assign
                      </button>
                      <a href="/do_latter">
                        <button
                          type="submit"
                          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl mt-4"
                        >
                          Do Latter
                        </button>
                      </a>
                      
                      </div>
                     
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                {/* <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mr-2"
                  onClick={hideAssignForm}
                >
                  Confirm
                </button> */}
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl"
                  onClick={hideAssignForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignPage;


