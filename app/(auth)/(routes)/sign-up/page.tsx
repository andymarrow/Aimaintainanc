import React from 'react'

function SignUp() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded-lg" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" >Password</label>
          <input className="w-full p-2 border border-gray-300 rounded-lg" type="password" id="password" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" >Deepartment</label>
          <input className="w-full p-2 border border-gray-300 rounded-lg" type="department" id="department" />
        </div>
        <button className="w-full p-2 bg-blue-500 text-white rounded-lg">Login</button>
      </form>
    </div>
    </>
  
  )
}

export default SignUp
