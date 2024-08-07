"use client";

import {
  BarChart,
  CheckSquare,
  Hourglass,
  XSquare,
  Search,
  ClipboardList,
  LogOut,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: ClipboardList,
    label: "All Request",
    href: "/",
  },
  {
    icon: CheckSquare,
    label: "Accepted",
    href: "/accepted",
  },
  {
    icon: Hourglass,
    label: "Pending",
    href: "/pending",
  },
  {
    icon: XSquare,
    label: "Rejected",
    href: "/rejected",
  },
  {
    icon: BarChart,
    label: "Analysis",
    href: "/analysis",
  },
  {
    icon: Search,
    label: "Problem Search",
    href: "/problem_search",
  },
  {
    icon: LogOut,
    label: "Logout",
    href: "/sign-out",
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
