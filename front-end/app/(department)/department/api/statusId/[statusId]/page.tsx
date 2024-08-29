"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface MaintenanceRequest {
  request_id: number;
  requester_name: string;
  email: string;
  device_type: string;
  phone_number: string;
  status: string;
}

const RequestDetail = () => {
  const [request, setRequest] = useState<MaintenanceRequest | null>(null);
  const pathname = usePathname();
  const request_id = pathname.split("/statusId/").pop();
  const router = useRouter();

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/requests/maintenanceRequests/${request_id}`);
        if (!response.ok) {
          throw new Error("Request not found");
        }
        const data = await response.json();
        setRequest(data[0]); // Assuming the API returns an array
      } catch (error) {
        console.error(error);
      }
    };

    if (request_id) {
      fetchRequest();
    }
  }, [request_id]);

  if (!request) {
    return <p>Request Not Found.</p>;
  }

  const handleStatusUpdate = async (newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:3002/api/requests/maintenanceRequests/${request?.request_id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const updatedRequest = await response.json();
      setRequest(updatedRequest);

      if (newStatus === "Pending") {
        router.push("/department/accepted");
      } else if (newStatus === "Rejected") {
        router.push("/department/rejected");
      }
    } catch (error) {
      console.error("Error updating request status:", error);
      alert(`Failed to ${newStatus.toLowerCase()} request`);
    }
  };
  

  const handleAccept = () => handleStatusUpdate("Pending");
  const handleReject = () => handleStatusUpdate("Rejected");
  const handleRecondiser = () => handleStatusUpdate("Pending");
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Request Details</h1>
        <p>
          <strong>Requester Name:</strong> {request.requester_name}
        </p>
        <p>
          <strong>Device Type:</strong> {request.device_type}
        </p>
        <p>
          <strong>Phone Number:</strong> {request.phone_number}
        </p>
        <p>
          <strong>Email:</strong> {request.email}
        </p>
        <p>
          <strong>Status:</strong> {request.status}
        </p>

        {request.status === "In_Progress" && (
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
          </div>
        )}


{request.status === "Rejected" && (
          <div className="mt-4">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleRecondiser}
            >
              Recondiser
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestDetail;
