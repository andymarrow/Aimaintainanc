"use Client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Table = ({ requests }) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(requests.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const requestToBeRendered = requests.slice(startIndex, endIndex);

  const handleButtonClick = (id: Number) => {
    router.push(`/department/api/statusId/${id}`);
  };
  return (
    <div className="overflow-x-auto">
      <div className="shadow-md rounded-lg p-6 overflow-x-auto scrollbar-thin scrollbar-thumb scrollbar-track scrollbar-rounded min-w-full">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4">Requester Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone Number</th>
              <th className="py-2 px-4">Request Type</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Department</th>
              <th className="py-2 px-4">Device Type</th>
              <th className="py-2 px-4">Model Number</th>
              <th className="py-2 px-4">Urgency</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {requestToBeRendered.map((request, index) => (
              <tr key={index}>
                <td className="py-2 px-4 ">{request.requesterName}</td>
                <td className="py-2 px-4">{request.email}</td>
                <td className="py-2 px-4 ">{request.phoneNo}</td>
                <td className="py-2 px-4">{request.requestType}</td>
                <td className="py-2 px-4">{request.description}</td>
                <td className="py-2 px-4">{request.department}</td>
                <td className="py-2 px-4">{request.deviceType}</td>
                <td className="py-2 px-4">{request.modelNo}</td>
                <td className="py-2 px-4">{request.Urgency}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleButtonClick(request.id)}
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full 
                     hover:shadow-lg ${
                       request.status === "accepted"
                         ? "bg-green-200 text-green-800"
                         : request.status === "rejected"
                         ? "bg-red-200 text-red-800"
                         : "bg-yellow-200 text-yellow-800"
                     }`}
                  >
                    {request.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 mx-1 bg-gray-200 text-gray-800 rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 mx-1 rounded bg-gray-200 text-gray-800"
          onClick={() =>
            setCurrentPage((next) => Math.min(next + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
