"use client";
import { Navbar } from "@/app/(employee)/employee/_componenets/EmpComp/navbar";
import { Sidebar } from "@/app/(employee)/employee/_componenets/EmpComp/sidebar";
import React, { useState } from "react";
import { requests } from "../../../../empData";
import { usePathname } from "next/navigation";

export default function AssignedCompleted() {
  const [isTechnicianView, setIsTechnicianView] = useState(false);

  const showTechnicianView = () => {
    setIsTechnicianView(true);
  };

  const showRequestorView = () => {
    setIsTechnicianView(false);
  };
  return (
    <div className="">
      {/* Nav */}
      <div className="h-[80px] md:pl-60 fixed inset-y-0 w-full  top-0 z-50">
        <Navbar />
      </div>
      {/* Side */}
      <div className="hidden md:flex h-full w-56 flex-col fixed top-0 inset-y-0 z-40 ml-4">
        <Sidebar />
      </div>
      <main className="pt-[100px] md:pl-60 ">
        <div className="bg-slate-400  rounded-lg shadow-lg p-4 sm:p-6 lg:p-8  w-full ">
          <h2 className="text-3xl font-bold mb-4 text-center">
            completed & Feedback Form
          </h2>
          <p className="mb-4">
            This form is for for giving feedback to the technician on the
            maintenance job.
          </p>
          <p className="mb-4">
            You are assigning a technician for{" "}
            <span className="font-bold">John doe</span>'s request?
          </p>

          <div className="bg-slate-300 rounded-lg p-4">
            <div className="bottom-data">
              <div className="orders">
                <div className="header flex items-center mb-4">
                  <i className="bx bx-receipt text-2xl"></i>
                  <h3 className="ml-3 text-xl font-bold">
                    Checking Assignment
                  </h3>
                </div>

                <form className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="RequesterName"
                        className="block mb-1 font-medium"
                      >
                        Requester Name
                      </label>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-2 w-full"
                        id="RequesterName"
                        placeholder="enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="Email" className="block mb-1 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        className="border rounded-md px-3 py-2 w-full"
                        id="Email"
                        placeholder="enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="PhoneNo"
                        className="block mb-1 font-medium"
                      >
                        Phone No
                      </label>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-2 w-full"
                        placeholder="enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="DeviceType"
                        className="block mb-1 font-medium"
                      >
                        Device Type
                      </label>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-2 w-full"
                        id="DeviceType"
                        placeholder="enter your Device Type"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="RequestType"
                        className="block mb-1 font-medium"
                      >
                        Request Type
                      </label>
                      <select
                        id="RequestType"
                        className="border rounded-md px-3 py-2 w-full"
                        required
                      >
                        <option value="" disabled selected>
                          Select Request Type
                        </option>
                        <option value="network">Network</option>
                        <option value="software">Software</option>
                        <option value="hardware">Hardware</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="Department"
                        className="block mb-1 font-medium"
                      >
                        Department
                      </label>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-2 w-full"
                        id="Department"
                        placeholder="enter your Department"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="Description"
                        className="block mb-1 font-medium"
                      >
                        Description
                      </label>
                      <textarea
                        className="border rounded-md px-3 py-2 w-full"
                        id="Description"
                        placeholder="enter your Description"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor="ModelNo"
                        className="block mb-1 font-medium"
                      >
                        Model No
                      </label>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-2 w-full"
                        id="ModelNo"
                        placeholder="enter your Model No"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="Urgency"
                        className="block mb-1 font-medium"
                      >
                        Urgency
                      </label>
                      <select
                        id="Urgency"
                        className="border rounded-md px-3 py-2 w-full"
                        required
                      >
                        <option value="" disabled selected>
                          Select Urgency
                        </option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl mr-2"
                      onClick={showTechnicianView}
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
