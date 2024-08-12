"use client";
import { usePathname } from "next/navigation";
import { requests } from "../../../data";
import { useState } from "react";

const RequestDetail = () => {
  const [showHighForm, setShowHighForm] = useState(false);

  const pathname = usePathname();
  const idString = pathname.split("/statusId/").pop();

  if (!idString) return <p>Request Not Found.</p>;

  const id = parseInt(idString, 10);

  const request = requests.find((req) => req.id === id);

  if (!request) {
    return <p>Request Not Found.</p>;
  }

  const handleAccept = () => {
    // we insert backend logic for accepted request here
    alert("Request Accepted");
  };
  const handleSubmit = () => {
    // we insert backend logic for submitted request here
    alert("Request Submitted");
  };

  const handleReject = () => {
    // we insert backend logic for rejected request here
    alert("Request Rejected");
  };

  const handleHighForm = () => {
    setShowHighForm(true);
  };

  const handleCloseHighForm = () => {
    setShowHighForm(false);
  };

  const handleReconsideration = () => {
    // we insert backend logic for reconsideration here
    alert("Request Reconsidered");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Request Details</h1>
        <p>
          <strong>Requester Name:</strong> {request.requesterName}
        </p>
        <p>
          <strong>Device Type:</strong> {request.deviceType}
        </p>
        <p>
          <strong>Phone Number:</strong> {request.phoneNo}
        </p>
        <p>
          <strong>Email:</strong> {request.email}
        </p>
        <p>
          <strong>Status:</strong> {request.status}
        </p>

        {request.status === "InProgress" && (
          <div className="mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleReject}
            >
              Reject
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleHighForm}
            >
              High Form
            </button>
          </div>
        )}

        {request.status === "rejected" && (
          <div className="mt-4">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={handleReconsideration}
            >
              Reconsider
            </button>
          </div>
        )}

        {showHighForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">High Form</h2>
              <p>Add additional information for the request:</p>
              <textarea className="w-full p-2 border rounded mt-2 mb-4"></textarea>
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleCloseHighForm}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestDetail;
