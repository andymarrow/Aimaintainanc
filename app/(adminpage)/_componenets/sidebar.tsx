import  Logo  from "./logo"
import  {SidebarRoutes}  from "./sidebar-routes"

export const Sidebar =() =>{
    return(
        <div className="m-2 rounded-lg h-full border border-gray-300 flex flex-col overflow-auto shadow-lg overflow-y-auto  backdrop-blur-sm" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}> 
            <div className="p-6">
                <div className="ml-4">
                  <Logo />
                </div>
                
                <p className="text-center font-bold text-blue-500">Maintenance</p>
                <div className="flex flex-col  justify-start  ">
                    <SidebarRoutes />
                </div>
            </div>
        </div>
    )
}