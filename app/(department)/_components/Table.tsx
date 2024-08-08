"use Client";
import React from "react";

const Table = ({ requests }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4">Requester Name</th>
            <th className="py-2 px-4">Device Type</th>
            <th className="py-2 px-4">Phone Number</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td className="py-2 px-7 ">{request.requesterName}</td>
              <td className="py-2 px-4">{request.deviceType}</td>
              <td className="py-2 px-4 ">{request.phoneNumber}</td>
              <td className="py-2 px-4">{request.email}</td>
              <td className="py-2 px-4">
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    request.status === "accepted"
                      ? "bg-green-200 text-green-800"
                      : request.status === "rejected"
                      ? "bg-red-200 text-red-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {request.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
