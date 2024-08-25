"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchResults } from "../../empData";
import { Navbar } from "../../_componenets/EmpComp/navbar";
import { Sidebar } from "../../_componenets/EmpComp/sidebar";
const SearchProblem = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredSearchResult = searchResults.filter((searchResult) =>
    searchResult.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClick = (id: Number) => {
    router.push(`/api/searchProblem/${id}`);
  };

  return (
    <>
      <div className="h-[80px] md:pl-60 fixed inset-y-0 w-full  top-0 z-50">
        <Navbar />
      </div>
      {/* Side */}
      <div className="hidden md:flex h-full w-56 flex-col fixed top-0 inset-y-0 z-40 ml-4">
        <Sidebar />
      </div>
      <div className="min-h-screen bg-gray-100 p-6 pt-[150px] md:ml-56">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6">Search for Help Desks</h1>
          <div className="flex items-center mb-6">
            <input
              type="text"
              className="flex-grow border border-gray-300 p-2 rounded-lg"
              placeholder="Enter a problem to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="ml-4 px-4 py-2 bg-blue-500 text-white 
            font-semibold rounded-lg shadow-md hover:bg-blue-600"
              // focus:outline-none
              // focus:ring-2
              // focus:ring-blue-500
              // focus:ring-opacity-75
            >
              Search
            </button>
          </div>
          {searchQuery && (
            <div>
              {filteredSearchResult.length > 0 ? (
                <ul className="space-y-4">
                  {filteredSearchResult.map((result, index) => (
                    <li
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg shadow-md 
                    hover:bg-gray-100 transition hover:transition-transform translate-y-1"
                      onClick={() => handleClick(result.id)}
                    >
                      <h2 className="text-xl font-semibold">{result.title}</h2>
                      <p className="text-blue-500">
                        <a href={result.link} target="_blank">
                          {result.link}
                        </a>
                      </p>
                      <p className="text-gray-600">Type: {result.type}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">
                  No results found. Try searching for a different problem.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchProblem;
