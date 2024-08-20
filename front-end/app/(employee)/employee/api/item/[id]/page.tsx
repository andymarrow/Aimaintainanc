"use client";
import { Navbar } from "@/app/(employee)/employee/_componenets/EmpComp/navbar";
import { Sidebar } from "@/app/(employee)/employee/_componenets/EmpComp/sidebar";
import React, { useState } from 'react';
import { requests } from "../../../empData";
import { usePathname } from 'next/navigation';

export default function AssignedCompleted() {

    const [technicianRating, seteTechnicianRating] = useState(" ");
    const [popupMessage, setPopupMessage] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    const [isFeedbackView, setIsFeedbackView] = useState(false);



    // Handles the submit button of the feedbadck form
    const handleSubmit = async (event: React.FormEvent) => {
         event.preventDefault();
         const formData = new FormData(event.target as HTMLFormElement); // object 
         const data = {
          technicianName: formData.get("technicianName") as string,
          technicianRating: formData.get("technicianRating") as string,
          feedback: formData.get("feedback") as string,
        };
    
        try {
          console.log(data);
          const response = await fetch("http://localhost:3002/api/requests/newFeedbackForm", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify(data),
          });
          if (response.ok) {
            setPopupMessage("Feedback sent succesfully");
            setPopupVisible(true);
          } else {
            const errorMessage = await response.text();
            setPopupMessage("Feedback not sent : " + errorMessage);
            setPopupVisible(true);
          }
        } catch (err) {
          setPopupMessage("Server error: " + (err as Error).message);
          setPopupVisible(true);
        }
      };

    

    //   i dont know what these line codes do
        const pathname = usePathname()
        const idString = pathname.split("/").pop();
        if (!idString) return <p>Request Not Found.</p>;
        const id = parseInt(idString, 10);
        const reqInfo  =requests.find((req) => req.id === id);


        if (!reqInfo) {
            return <p>Request Not Found.</p>;
        }
        
    

       
        
        // functions
        const showFeedback = () => {
            setIsFeedbackView(true);
        };
            
        const showRequestorView = () => {
            setIsFeedbackView(false);
         };
        const closePopup = () => {
            setPopupVisible(false);
          };
         
        const handleTechnicianRating = (e) => {
            seteTechnicianRating(e.target.value)
        }






  return (
    <div className="">

        {/* Nav */}
        <div className="h-[80px] md:pl-60 fixed inset-y-0 w-full  top-0 z-50"><Navbar /></div>
        {/* Side */}
        <div className="hidden md:flex h-full w-56 flex-col fixed top-0 inset-y-0 z-40 ml-4"><Sidebar /></div>


        <main className='pt-[100px] md:pl-60 '>
            <div className="rounded-lg shadow-lg p-4 sm:p-6 lg:p-8  w-full " >
            

            {!isFeedbackView ? (
            <>
                <h2 className="text-3xl font-bold mb-4 text-center">Feedback Form</h2>
                <p className="mb-4">This form is for for giving feedback to the technician on the maintenance job.</p>
                {/* <p className="mb-4">You are assigning a technician for <span className="font-bold">{reqInfo.requesterName}</span>'s request?</p> */}

                <div className="bg-slate-200 rounded-lg p-4">
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
                                        defaultValue={reqInfo.requesterName}
                                        required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Email" className="block mb-1 font-medium">Email</label>
                                        <input
                                        type="email"
                                        className="border rounded-md px-3 py-2 w-full"
                                        id="Email"
                                        defaultValue={reqInfo.email}
                                        required
                                        />
                                    </div>
                       

                        
                                    <div>
                                        <label htmlFor="PhoneNo" className="block mb-1 font-medium">Phone No</label>
                                        <input
                                        type="text"
                                        className="border rounded-md px-3 py-2 w-full"
                                        defaultValue={reqInfo.phoneNo}
                                        required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="DeviceType" className="block mb-1 font-medium">Device Type</label>
                                        <input
                                        type="text"
                                        className="border rounded-md px-3 py-2 w-full"
                                        id="DeviceType"
                                        defaultValue={reqInfo.deviceType}
                                        required
                                        />
                                    </div>
                     
                                    <div>
                                        <label htmlFor="RequestType" className="block mb-1 font-medium">Request Type</label>
                                        <input
                                        type="text"
                                        className="border rounded-md px-3 py-2 w-full"
                                        id="RequestType"
                                        defaultValue={reqInfo.requestType}
                                        required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Department" className="block mb-1 font-medium">Department</label>
                                        <input
                                        type="text"
                                        className="border rounded-md px-3 py-2 w-full"
                                        id="Department"
                                        defaultValue={reqInfo.department}
                                        required
                                        />
                                    </div>
                       
                                    <div>
                                        <label htmlFor="Description" className="block mb-1 font-medium">Description</label>
                                        <textarea
                                        className="border rounded-md px-3 py-2 w-full"
                                        id="Description"
                                        defaultValue={reqInfo.description}
                                        required
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="ModelNo" className="block mb-1 font-medium">Model No</label>
                                        <input
                                        type="text"
                                        className="border rounded-md px-3 py-2 w-full"
                                        id="ModelNo"
                                        defaultValue={reqInfo.modelNo}
                                        required
                                        />
                                    </div>
                                </div>
                                    <div className="flex justify-center mt-4">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mr-2"onClick={showFeedback}> Send Your Feed Back</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>

                
            </>
            ) : (
            <>
                
                <div className="flex justify-start mb-4">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-xl"
                        onClick={showRequestorView}
                        >Requestor Detail</button>
                </div>
      {/* feedback */}
                <div className="bg-slate-200 rounded-lg p-4">
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    

                            <div>
                                <label htmlFor="TechnicianName" className="block mb-1 font-medium">Technician Name</label>
                                <input
                                type="text"
                                className="border rounded-md px-3 py-2 w-full"
                                name="employee_name"
                                //technician name should be filled automatically
                                placeholder="Enter Technician Name"
                                required
                                />
                            </div>
                        <div>
                            <label htmlFor="TechnicianRating" className="block mb-1 font-medium">Rating</label>
                                <select
                                    name="rating"
                                    className="border rounded-md px-3 py-2 w-full"
                                    required
                                    value={technicianRating}
                                    onChange={handleTechnicianRating}
                                >
                                    <option value="" disabled selected>Select Rating</option>
                                    <option value="ONE">1</option>
                                    <option value="TWO">2</option>
                                    <option value="THREE">3</option>
                                    <option value="FOUR">4</option>
                                    <option value="FIVE">5</option>
                                </select>
                                </div>

                        
                        
                        <div>
                            <label htmlFor="RequestDate" className="block mb-1 font-medium">Comment</label>
                            <textarea
                        
                            className="border rounded-md px-3 py-2 w-full"
                            name="comments"
                            required
                            />
                        </div>
                    

                    
                    </div>
                    <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-40 rounded-xl"
                        >Send</button>
                    </div>
                    </form>
                </div>
                    
            </>
            )}
        </div>
    </main>
        {/* Popup */}
        {popupVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-lg">{popupMessage}</div>
                    <div><button
                    onClick={closePopup}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  flex justify-center "
                    >
                    Close </button></div>
                </div>
            </div>
        )}
    </div>
  )
}