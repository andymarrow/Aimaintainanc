"use client";

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

const guestRoutes = [
  {
    icon: ClipboardList,
    label: "All Request",
    href: "/department/allRequest",
  },
  {
    icon: CheckSquare,
    label: "Accepted",
    href: "/department/accepted",
  },
  {
    icon: Hourglass,
    label: "In progress",
    href: "/department/pending",
  },
  {
    icon: XSquare,
    label: "Rejected",
    href: "/department/rejected",
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
  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full ">
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
