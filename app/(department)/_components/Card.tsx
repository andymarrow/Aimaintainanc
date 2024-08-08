"use Client";
import React from "react";

const Card = ({ requests = [] }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <h2 className="text-xl font-bold mb-2">{requests.requesterName}</h2>
      <p>
        <strong>Device Type:</strong> {requests.deviceType}
      </p>
      <p>
        <strong>Phone Number:</strong> {requests.phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {requests.email}
      </p>
      <span
        className={`inline-block px-2 py-1 mt-2 text-xs font-semibold rounded-full ${
          requests.status === "accepted"
            ? "bg-green-200 text-green-800"
            : requests.status === "rejected"
            ? "bg-red-200 text-red-800"
            : "bg-yellow-200 text-yellow-800"
        }`}
      >
        {requests.status}
      </span>
    </div>
  );
};

export default Card;
