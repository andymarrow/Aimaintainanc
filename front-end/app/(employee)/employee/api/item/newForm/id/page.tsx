"use client";
import { Navbar } from "@/app/(employee)/employee/_componenets/EmpComp/navbar";
import { Sidebar } from "@/app/(employee)/employee/_componenets/EmpComp/sidebar";
import React, { useState } from "react";


export default function AssignedCompleted() {
 
  const [requestType, setRequestType] = useState("");
  const [Other, setOther] = useState(false);
  const [urgency, setUrgency] = useState(" ");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  // popup
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement); // object 

    const data = {
      requester_name: formData.get("requester_name") as string,
      email: formData.get("email") as string,
      device_type: formData.get("device_type") as string,
      description: formData.get("description") as string,
      priority: formData.get("priority") as string,
      phone_number: formData.get("phone_number") as string,
      request_type: formData.get("request_type") as string,
      other_request_type: formData.get("other_request_type") as string,
      model_no: formData.get("model_no") as string,
    };

    try {
      console.log(data);
      const response = await fetch("http://localhost:3002/api/requests/newForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });
      if (response.ok) {
        setPopupMessage("Request sent succesfully");
        setPopupVisible(true);
      } else {
        const errorMessage = await response.text();
        setPopupMessage("Request not sent : " + errorMessage);
        setPopupVisible(true);
      }
    } catch (err) {
      setPopupMessage("Server error: " + (err as Error).message);
      setPopupVisible(true);
    }
  };

      
 const closePopup = () => {
    setPopupVisible(false);
  };




  const handleOtherClick = (e) => {
    setRequestType(e.target.value);
    setOther(e.target.value === "Other");
  };

  const handleUrgency = (e) => {
      setUrgency(e.target.value)
  }
 

  

 

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
        <div className=" rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Request Form</h2>

          <div className="bg-slate-300 rounded-lg p-4">
            <div className="bottom-data">
              <div className="orders">
                <form className="mt-4"  onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label>Requester Name</label>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-2 w-full"
                        name="requester_name"
                        placeholder="enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="Email" className="block mb-1 font-medium"> Email </label>
                      <input
                        type="email"
                        className="border rounded-md px-3 py-2 w-full"
                        name="email"
                        placeholder="enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label>
                        Device Type
                      </label>
                      <input
                        type="text"
                        className="border rounded-md px-3 py-2 w-full"
                        name="device_type"
                        placeholder="enter your Device Type"
                        required
                      />
                    </div>

                    <div>
                      <label>
                        Description
                      </label>
                      <textarea
                        className="border rounded-md px-3 py-2 w-full"
                        name="description"
                        placeholder="Enter your Description"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label>
                        Urgency
                      </label>
                      <select
                        name="priority"
                        className="border rounded-md px-3 py-2 w-full"
                        required
                        value={urgency}
                        onChange={handleUrgency}
                      >
                        <option disabled selected>
                          Select Urgency
                        </option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>

                    <div>
                      <label>Phone Number</label>
                      <input 
                      name="phone_number"
                      type="text"
                      placeholder="+251-911-22-89-42"
                      className="border rounded-md px-3 py-2 w-full"/>
                
                    </div>
                    <div>
                      <label>
                        Request Type
                      </label>
                      <select
                        name="request_type"
                        className="border rounded-md px-3 py-2 w-full"
                        value={requestType}
                        onChange={handleOtherClick}
                        required
                      >
                        <option value="" disabled selected>
                          Select Request Type
                        </option>
                        <option value="Network">Network</option>
                        <option value="Software">Software</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {Other && (
                      <div>
                        <label>
                          Other Request Type
                        </label>
                        <textarea
                          className="border rounded-md px-3 py-2 w-full"
                          name="other_request_type "
                          placeholder="Please describe your request type"
                    
                        ></textarea>
                      </div>
                    )}
                          <div>
                      <label>Model Number</label>
                      <input 
                      name="model_no"
                      type="text"
                      placeholder="Enter the model number here"
                      className="border rounded-md px-3 py-2 w-full"/>
                
                    </div>
                
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl mr-2"
                      onSubmit={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

         {/* Popup */}
         {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-lg">{popupMessage}</div>
            <button
              onClick={closePopup}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  flex justify-center "
            >
              Close </button>
          </div>
        </div>
      )}


    </div>
  );
}

