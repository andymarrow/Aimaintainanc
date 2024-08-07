"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { MdNotifications, MdSearch } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="p-5 rounded-md flex items-center justify-between bg-slate-200">
      <div className="font-bold capitalize p-5">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-20">
        <div className="flex items-center gap-10 bg-slate-100 p-5 rounded-md">
          <MdSearch />
          <input
            className="bg-transparent text-black border-transparent"
            type="text"
            placeholder="...Search"
          />
        </div>
        <div className="p-5">
          <MdNotifications />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
