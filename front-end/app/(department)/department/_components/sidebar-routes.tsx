"use client";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import {
  BarChart,
  CheckSquare,
  Hourglass,
  XSquare,
  Search,
  ClipboardList,
  LogOut,
  Settings,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import Image from "next/image";

const guestRoutes = [
  {
    icon: Hourglass,
    label: "In progress",
    href: "/department/pending",
  },
  {
    icon: CheckSquare,
    label: "Accepted",
    href: "/department/accepted",
  },
  {
    icon: XSquare,
    label: "Rejected",
    href: "/department/rejected",
  },
  {
    icon: ClipboardList,
    label: "All Request",
    href: "/department/allRequest",
  },
  {
    icon: BarChart,
    label: "Analysis",
    href: "/department/analysis",
  },
  {
    icon: Search,
    label: "Problem Search",
    href: "/department/problem_search",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/department/settings",
  },
  {
    icon: LogOut,
    label: "Logout",
    href: "/auth/Home",
  },
];

export const SidebarRoutes = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const getTokenFromCookies = () => {
      const cookieString = document.cookie;
      const cookies = cookieString.split("; ");
      const authTokenCookie = cookies.find((cookie) =>
        cookie.startsWith("authToken=")
      );
      return authTokenCookie ? authTokenCookie.split("=")[1] : null;
    };

    const fetchDepartmentName = async (departmentId: string) => {
      try {
        const response = await fetch(`http://localhost:3002/api/requests/department/${departmentId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setDepartmentName(data.name);
          console.log(data.name);
        } else {
          setDepartmentName("Unknown Department");
        }
      } catch (error) {
        setDepartmentName("Unknown Department");
      }
    };


    const token = getTokenFromCookies();

    if (token) {
      const decodedToken: any = jwtDecode(token); // Add type assertion if necessary
      setEmployeeName(decodedToken.username);
      setRole(decodedToken.role); // Assuming `role` is available in token
      fetchDepartmentName(decodedToken.departementId);
      console.log(decodedToken.departementId)
    }
  }, []);

  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      <div className="mt-5 flex items-center gap-x-2 text-black font-[500] text-sm pl-6 transition-all hover:text-sky-700 hover:bg-slate-300/20">
        <Image height={40} width={40} alt="logo" src="/avatar.png" />
        <div className="flex flex-col">
          <h5>Hey, {employeeName || "Guest"}</h5>
          <h6><strong>{departmentName || "Unknown Department"} </strong></h6>
          <strong>{role || "Role"}</strong>
        </div>
      </div>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
