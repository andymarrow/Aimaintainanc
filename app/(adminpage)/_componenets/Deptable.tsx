import React from 'react';
import {CirclePlus } from 'lucide-react';
const Table = () => {
  return (
    <div className='flex pt-20 pr-50 pl-20   pr-50 relative'>
     
     <div className='flex flex-row absolute top-10 right-1 w-fit text-white rounded-md bg-blue-700 text-sm'>
        <div><CirclePlus/></div>
        <button className='text-blue-50  rounded-md pl-2'> Add User</button>
        
      </div>
    <div className="bg-white rounded-lg shadow-md overflow-scroll h-30 pr-8">
      <table className=" w-full h-screen table-auto rounded-lg  ">
        <thead>
          <tr className=" w-fit  text-gray-700 font-bold">
            <th className="px-4 py-3  pr-8">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3 ">Password</th>
            <th className="px-4 py-3 ">Department</th>
            <th className="px-4 py-3 ">ID</th>
            <th className="px-4 py-3 ">Detail</th>
          </tr>
        </thead>
         <tbody>
            <tr>
                <td className="px-4 py-3 border-b" >Ann Culhan</td>
                <td className="px-4 py-3 border-b">Ann@gmail.com</td>
                <td className="px-4 py-3 border-b">password123</td>
                <td className="px-4 py-3 border-b">Maintenace</td>
                <td className="px-4 py-3 border-b">iie33234</td>
                <td className="px-4 py-3 border-b"><button className='bg-green-700 text-gray-100 rounded-md w-full'>View</button></td>
            </tr>


            <tr>
                <td className="px-4 py-3 border-b" >Annn Culhan</td>
                <td className="px-4 py-3 border-b">Ann@gmail.com</td>
                <td className="px-4 py-3 border-b">password123</td>
                <td className="px-4 py-3 border-b">Dev Team</td>
                <td className="px-4 py-3 border-b">iie33234</td>
                <td className="px-4 py-3 border-b"><button className='bg-green-700 text-gray-100 rounded-md w-full'>View</button></td>
            </tr>

            <tr>
                <td className="px-4 py-3 border-b" >Ann Culhan</td>
                <td className="px-4 py-3 border-b">Ann@gmail.com</td>
                <td className="px-4 py-3 border-b">password123</td>
                <td className="px-4 py-3 border-b ">Dev Team</td>
                <td className="px-4 py-3 border-b">iie33234</td>
                <td className="px-4 py-3 border-b"><button className='bg-green-700 text-gray-100 rounded-md w-full'>View</button></td>
            </tr>


            <tr>
                <td className="px-4 py-3 border-b" >Ann Culhan</td>
                <td className="px-4 py-3 border-b">Ann@gmail.com</td>
                <td className="px-4 py-3 border-b">password123</td>
                <td className="px-4 py-3 border-b ">Dev Team</td>
                <td className="px-4 py-3 border-b">iie33234</td>
                <td className="px-4 py-3 border-b"><button className='bg-green-700 text-gray-100 rounded-md w-full'>View</button></td>
            </tr>



            <tr>
                <td className="px-4 py-3 border-b" >Ann Culhan</td>
                <td className="px-4 py-3 border-b">Ann@gmail.com</td>
                <td className="px-4 py-3 border-b">password123</td>
                <td className="px-4 py-3 border-b">Dev Team</td>
                <td className="px-4 py-3 border-b">iie33234</td>
                <td className="px-4 py-3 border-b"><button className='bg-green-700 text-gray-100 rounded-md w-full'>View</button></td>
            </tr>


            <tr>
                <td className="px-4 py-3 border-b" >Ann Culhan</td>
                <td className="px-4 py-3 border-b">Ann@gmail.com</td>
                <td className="px-4 py-3 border-b">password123</td>
                <td className="px-4 py-3 border-b">Dev Team</td>
                <td className="px-4 py-3 border-b">iie33234</td>
                <td className="px-4 py-3 border-b"><button className='bg-green-700 text-gray-100 rounded-md w-full'>View</button></td>
            </tr>



            <tr>
                <td className="px-4 py-3 border-b" >Ann Culhan</td>
                <td className="px-4 py-3 border-b">Ann@gmail.com</td>
                <td className="px-4 py-3 border-b">password123</td>
                <td className="px-4 py-3 border-b">Dev Team</td>
                <td className="px-4 py-3 border-b">iie33234</td>
                <td className="px-4 py-3 border-b"><button className='bg-green-700 text-gray-100 rounded-md w-full'>View</button></td>
            </tr>



            <tr>
                <td className="px-4 py-3 border-b" >Ann Culhan</td>
                <td className="px-4 py-3 border-b">Ann@gmail.com</td>
                <td className="px-4 py-3 border-b">password123</td>
                <td className="px-4 py-3 border-b">Dev Team</td>
                <td className="px-4 py-3 border-b">iie33234</td>
                <td className="px-4 py-3 border-b"><button className='bg-green-700 text-gray-100 rounded-md w-full'>View</button></td>
            </tr>
            
         </tbody>
       
      </table>
    </div>
    </div>
  );
};

export default Table;