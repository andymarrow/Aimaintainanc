import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0  m-2 rounded-lg min-h-screen border border-gray-300 flex flex-col 
      overflow-auto bg-slate-200 shadow-lg overflow-y-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="p-6">
        <div className="ml-4 mb-4">
          <Logo />
        </div>
        <div className="mt-5 flex items-center gap-x-2 text-black font-[500] text-sm pl-6 transition-all hover:text-sky-700 hover:bg-slate-300/20">
          <Image height={50} width={50} alt="logo" src="/avatar.png" />
          <div className="text-start font-bold text-blue-500 mt-4 mb-4">
            <h5> Mr. Mamo </h5>
            <p>
              {" "}
              <strong>Department Head</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full min-h-full  ">
          <SidebarRoutes />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
