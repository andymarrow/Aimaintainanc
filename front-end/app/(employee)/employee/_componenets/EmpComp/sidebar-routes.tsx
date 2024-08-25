"use client";

import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import {
  ShieldCheck,
  Search,
  Settings,
  LogOut,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import Image from "next/image";

const guestRoutes = [
  {
    icon: ShieldCheck,
    label: "Request so far",
    href: "/employee/emp_dashboard",
  },
  {
    icon: Search,
    label: "Problem Search",
    href: "/employee/SearchProblem",
  },

  {
    icon: Settings,
    label: "Settings",
    href: "/employee/settings",
  },

  {
    icon: LogOut,
    label: "Logout",
    href: "/auth/Home",
  },
];

export const SidebarRoutes = () => {
  const [employeeName, setEmployeeName] = useState("");

  useEffect(() => {
    const getTokenFromCookies = () => {
      const cookieString = document.cookie;
      const cookies = cookieString.split("; ");
      const authTokenCookie = cookies.find((cookie) =>
        cookie.startsWith("authToken=")
      );
      return authTokenCookie ? authTokenCookie.split("=")[1] : null;
    };

    const token = getTokenFromCookies();

    if (token) {
      const decodedToken = jwtDecode(token);
      setEmployeeName(decodedToken.username);
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {guestRoutes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}

      <div className="mt-5 flex items-center gap-x-2 text-black font-[500] text-sm pl-6 transition-all hover:text-sky-700 hover:bg-slate-300/20">
        <Image height={40} width={40} alt="logo" src="/avatar.png" />
        <div className="flex justify-center items-center">
          <h5>Hey, {employeeName || "Guest"}</h5>
        </div>
      </div>
    </div>
  );
};
