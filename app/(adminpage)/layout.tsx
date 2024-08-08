import {Navbar}  from "@/app/(adminpage)/_componenets/navbar"
import {Sidebar} from "@/app/(adminpage)/_componenets/sidebar"
import View from "@/app/(adminpage)/_componenets/view"
const AdminDashboardLayout = (
    { children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen mt-0 pt-0 w-full  bg-purple-50">
      <div className="h-[80px] md:pl-60 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>

      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 ml-4">
        <Sidebar />
      </div>

      <main className="md:pl-60 pt-[90px] pl-[60px]  mt-2 ">
        {children}
      </main>
    
  </div>
  );
};

export default AdminDashboardLayout;
