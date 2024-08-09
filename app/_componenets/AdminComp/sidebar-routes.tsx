"use client";

import { BarChart, CheckSquare, CheckSquare2, Compass,ShieldMinus, ShieldCheck, FileText, Layout, LogOut, MessageCircle, Settings, Users } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import Image from "next/image"
import Link from "next/link";

const guestRoutes =[
    {
        icon:ShieldCheck,
        label: "Department List",
        href: "",
    },
    {
        icon:ShieldMinus ,
        label: "Removed Accounts",
        href: "/Deactivated",
    },
   
   
    
   
    {
        icon:Settings,
        label: "Settings",
        href: "/Deptable",
    },
   
    {
        icon: LogOut,
        label: "Logout",
        href: "/",
    },
]


export const SidebarRoutes =()=>{
    const routes = guestRoutes;
    return(
        <div className="flex flex-col w-full">
            {routes.map((route)=>(
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}

            <div className="mt-5 flex items-center gap-x-2 text-black font-[500] text-sm pl-6 transition-all hover:text-sky-700 hover:bg-slate-300/20">
                   <Image 
                         height={40}
                          width={40}
                         alt="logo"
                          src="/avatar.png"
                              />
                    <div className="flex justify-center items-center">
                    <h5> Hey , Abebe </h5>
                    </div>
                  

            </div>
           
        </div> 
    )
}