"use Client";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  ArrowUpNarrowWide,
  ArrowDownWideNarrow,
  CirclePlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { request } from "http";
import { log } from "console";
const Table = ({ requests }) => {
  //sorting

  const [sortedRequests, setSortedRequests] = useState(requests);
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  //modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [department, setDepartment] = useState(false);
  const [departments, setDepartments] = useState<String[]>([]);

  const filteredData = requests.filter(
    (request) => request.status === "Activated"
  );

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
  const pathname = usePathname();
  const routeString = pathname.split("/admin/").pop();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(requests.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const requestToBeRendered = sortedRequests.slice(startIndex, endIndex);

  useEffect(() => {
    handleDepartmentList();
  }, []);

  const handleButtonClick = (id: Number) => {
    router.push(`/admin/api/item/${id}`);
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setDepartment(false);
  };

  const handleAddDepartment = () => {
    setDepartment(true);
  };
  const handleDepartmentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
      departmentName: formData.get("departmentName") as string,
    };
    try {
      console.log(data);
      const response = await fetch(
        "http://localhost:3002/api/registers/departments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Department added successfully");
        setDepartment(false);
      } else {
        const errorMessage = await response.text();
        alert("Department addition failed" + errorMessage);
      }
    } catch (e) {
      console.error(`Server: ` + e);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const data = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      department: formData.get("department") as string,
      password: formData.get("password") as string,
      role: formData.get("role") as string,
      phoneNumber: formData.get("phoneNumber") as string,
    };

    try {
      console.log(data);
      const response = await fetch(
        "http://localhost:3002/api/registers/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("user registration successful");
        setIsModalOpen(false);
      } else {
        const errorMessage = await response.text();
        alert("User registration failed" + errorMessage);
      }
    } catch (err) {
      console.error(`Error: ` + err);
    }
  };

  const handleDepartmentList = async () => {
    try {
      const response = await fetch(
        "http://localhost:3002/api/registers/getDepartments",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok && Array.isArray(data)) {
        // Map the data to extract only department_name
        const departmentNames: String[] = data.map(
          (department: any) => department.department_name
        );
        setDepartments(departmentNames);
      } else {
        console.error(`Fetching department error: ${response.statusText}`);
      }
    } catch (err) {
      console.error(`Fetching  error: ${err}`);
    }
  };

  return (
    <div className="overflow-x-auto ${isModalOpen ? 'blur-md' : ''}` ">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add User</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="some@gmail.com"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="09-17-3356"
                  name="phoneNumber"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  name="department"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  {departments?.length > 0 &&
                    departments.map((department: any, index) => (
                      <option key={index} value={department}>
                        {department}
                      </option>
                    ))}
                  ;
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Role
                </label>
                <select
                  name="role"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="admin">Administrator</option>
                  <option value="employee">Employee</option>
                  <option value="department_head">Department Head</option>
                  <option value="maintenance_head">Maintenance Head</option>
                  <option value="technician">Technician</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {department && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Department</h2>

            <form onSubmit={handleDepartmentSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Department Name
                </label>
                <input
                  type="text"
                  placeholder="Department Name"
                  name="departmentName"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-row  justify-between">
        <div>
          <button onClick={handleSort}>
            {isSortedAsc ? <ArrowDownWideNarrow /> : <ArrowUpNarrowWide />}
          </button>
        </div>
        {routeString === "Deactivated" ? (
          " "
        ) : (
          <div className="flex flex-row gap-5">
            <div
              className="flex flex-row right-0 bg-blue-950 rounded-lg w-fit  mb-8 p-2"
              onClick={handleAddDepartment}
            >
              <div className="text-gray-200 text-center">
                <Plus />
              </div>
              <div>
                <Link href={""}>
                  <button className=" text-gray-200 items-end flex-row ">
                    ADD Department
                  </button>
                </Link>
              </div>
            </div>
            <div
              className=" flex flex-row right-0 bg-blue-950 rounded-lg w-fit  mb-8 p-2"
              onClick={handleAddClick}
            >
              <div className="text-gray-200 text-center">
                <Plus />
              </div>
              <div>
                <Link href={""}>
                  <button className=" text-gray-200 items-end flex-row ">
                    ADD User
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <table className="min-w-full bg-white border border-gray-200 ">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">User Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Password</th>
            <th className="py-2 px-4 text-left">Department</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Status</th>
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
                  // onClick={() => handleButtonClick(request.id)}
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
