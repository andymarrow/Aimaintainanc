"use Client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpNarrowWide , ArrowDownWideNarrow, CirclePlus  } from 'lucide-react';
import Link from "next/link";
const Table = ({ requests }) => {
  //sorting

  const [sortedRequests, setSortedRequests] = useState(requests);
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  const handleSort = () => {
    const sorted = [...sortedRequests].sort((a, b) => {
      const depA = a.department.toLowerCase();
      const depB = b.department.toLowerCase();
      if (isSortedAsc) {
        return depA > depB ? 1 : -1;
      } else {
        return depA < depB ? 1 : -1;
      }
    });
    setSortedRequests(sorted);
    setIsSortedAsc(!isSortedAsc);
  };

  //pagintion
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(requests.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const requestToBeRendered = sortedRequests.slice(startIndex, endIndex);

  const handleButtonClick = (id: Number) => {
    router.push(`/approvalState/${id}`);
  };


  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    
    <div className="overflow-x-auto ${isModalOpen ? 'blur-md' : ''}` ">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add User</h2>
            
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text"placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="some@gmail.com" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="software">Software Department</option>
                  <option value="hr">HR Department</option>
                  <option value="maintenance">Maintenance Department</option>
                  <option value="sales">Sales Department</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              
              
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input type="text" placeholder="head or employee" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              
              <div className="flex justify-end">
                <button type="button" onClick={handleClose} className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}








      <div className="flex flex-row  justify-between">
          <div><button onClick={handleSort}>
                    {isSortedAsc ? <ArrowDownWideNarrow /> : <ArrowUpNarrowWide />}
                  </button>
          </div>
          <div className=" flex flex-row bg-blue-950 rounded-md w-20">
            <div className="text-gray-200" onClick={handleAddClick} ><CirclePlus /></div>
            <div>
                <Link href={''}>
                <button className=" text-gray-200 items-end flex-row " > 
                  ADD
                </button>
                </Link>
            </div>
            
          </div>   
      </div>     
      <table className="min-w-full bg-white border border-gray-200 ">
        <thead>
          <tr>
          <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">User Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Password</th>
            <th className="py-2 px-4">Department</th>
            <th className="py-2 px-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {requestToBeRendered.map((request, index) => (
            <tr key={index}>
              <td className="py-2 px-7 ">{request.id}</td>
              <td className="py-2 px-7 ">{request.UserName}</td>
              <td className="py-2 px-4">{request.email}</td>
              <td className="py-2 px-4 ">{request.password}</td>
              <td className="py-2 px-4">{request.department}</td>
              <td className="py-2 px-4">{request.role}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleButtonClick(request.id)}
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full 
                     hover:shadow-lg ${
                       request.status === "Activated"
                         ? "bg-green-200 text-green-800"
                         : request.status === "Deactivated"
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
    </div>
  );
};

export default Table;