"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react"


const TabTable = ({ requests }) => {
  // Categorize requests based on their status
  const categorizedRequests = {
    accepted: requests.filter((req) => req.status === "Accepted"),
    rejected: requests.filter((req) => req.status === "Rejected"),
    completed: requests.filter((req) => req.status === "Completed"),
    inProgress: requests.filter((req) => req.status === "In Progress"),
    TechnicianAssigned: requests.filter((req) => req.status === "Assigned"),
  };

  const router = useRouter();

  // coloring
  const getStatusClass = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-200 text-green-800";
      case "In Progress":
        return "bg-yellow-200 text-yellow-800";
      case "Completed":
        return "bg-blue-200 text-blue-800";
      case "Rejected":
        return "bg-red-200 text-red-800";
      case "Assigned":
        return "bg-red-200 text-green-700";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };


  //completed button 
  const [activeTab, setActiveTab] = useState("accepted");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCompletedButtonClick = (status) => {
    if (status === "Completed") {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  //pagintion

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const currentRequests = categorizedRequests[activeTab];
  const totalPages = Math.ceil(currentRequests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const requestToBeRendered = currentRequests.slice(startIndex, endIndex);

  const handleClick = (id: Number) => {
    router.push(`/employee/api/item/${id}`);
  };

  const handleClickRoute = () => {
    // Generate a random ID
    const randomId = Math.floor(Math.random() * 10000); // Change 10000 to any maximum number if needed
    router.push(`/employee/api/item/newForm/${randomId}`);
  };


  return (
    <div className="container mx-auto mt-8 p-8">

      {/* New Request button */}
      <div className=" flex flex-row right-0 bg-blue-950 rounded-lg w-fit  mb-8 p-2">

        <div className="text-gray-200 text-center" ><Plus /></div>
        <div>
          <button className="text-gray-200 items-end flex-row" onClick={() => handleClickRoute()}>New Request</button>
        </div>

      </div>


      {/* Tab Tables */}
      <div className="flex space-x-4 bg-">
        {["accepted", "rejected", "completed", "inProgress", "TechnicianAssigned"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold ${activeTab === tab ? "text-white bg-blue-500" : "text-blue-500 bg-gray-200"
              } rounded-lg`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}
          </button>
        ))}
      </div>



      {/* Table */}
      <div className="mt-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Request Type</th>
              <th className="py-2 px-4">Device Type</th>
              <th className="py-2 px-4">Urgency</th>
              <th className="py-2 px-4">Status of Request</th>
            </tr>
          </thead>
          <tbody>
            {requestToBeRendered.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{row.description}</td>
                <td className="py-2 px-4">{row.requestType}</td>
                <td className="py-2 px-4">{row.deviceType}</td>
                <td className="py-2 px-4">{row.Urgency}</td>
                <td className="py-2 px-4">
                  {row.status === 'Completed' ?
                    <button
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full hover:shadow-lg ${getStatusClass(row.status)}`}
                      onClick={() => handleClick(row.id)}
                    >
                      {row.status}
                    </button> :
                    <button
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full hover:shadow-lg ${getStatusClass(row.status)}`}
                    >
                      {row.status}
                    </button>
                  }


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
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
            className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1
              ? "bg-blue-950 text-white"
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


      {/* Modal for completed button */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Completed Request Details</h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}




    </div>
  );
};

export default TabTable;
