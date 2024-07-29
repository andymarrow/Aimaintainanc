import React from 'react'
import Link from 'next/link'

function AdminLogin() {
  
  
  
 return  (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <form className="relative w-96  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg  border border-opacity-30 border-white shadow-lg-white p-6 rounded-lg  ">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
       
        {/*Email*/}
        <div className="mb-4"> 
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded-lg" type="email" id="email" />
        </div>

         {/*Password*/}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" >Password</label>
          <input className="w-full p-2 border border-gray-300 rounded-lg" type="password" id="password" />
        </div>

         {/*Department*/}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" >Deepartment</label>
          <input className="w-full p-2 border border-gray-300 rounded-lg" type="department" id="department" />
        </div>

         {/*Remeber me*/}
        <div className=' flex '>
          <label className="">
            <input type="checkbox" className="form-checkbox h-3 w-3 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"/>
            <span className="text-xs ">Remeber Me</span>
          </label>
        </div>

         {/*button*/}
        <button className="w-full p-2 bg-blue-500 text-white rounded-lg"  >Login</button>


        {/*Forgot password*/}
        <div className='flex justify-center w-full p-4 text-white'>
          <Link href={'/ForgotPassword'} className='text-xs'>
             Forgot Password?
          </Link>
        </div>


        {/*Terms and conditions, support*/}
        <div className='flex justify-evenly pt-2'>
        <span className="text-xs text-white">Terms & Conditions</span>
        <span className="text-xs text-white"> Support</span>
       
        </div>

      </form>
    </div>
    </>
  
  )
}

export default AdminLogin
