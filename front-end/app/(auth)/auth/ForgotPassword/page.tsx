import React from "react";
import Background from "@/public/robot.jpg";
function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white ">
    <div className="bg-slate-50 rounded-lg shadow-lg p-8 w-full max-w-4xl">
    <div className="flex justify-between items-center">
        {/* Left Side: Logo and Company Name */}
        <div className="flex  flex-col items-center space-x-4 text-blue-700 font-bold text-3xl">No Worries!!</div>
          
        {/* Right Side: Login Form */}
        <div>
          <form className="relative w-96  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg  border border-opacity-30 border-white shadow-lg-white p-6 rounded-lg">
          
            <h2 className="text-2xl font-bold mb-4 text-center ">
              Forgot Password?
            </h2>
            <h3 className="pb-4 text-center ">
              Please enter your email below correctly.
            </h3>
            {/*Email*/}
            <div className="mb-2">
              <label
                className="mb-2 text-sm font-medium text-gray-700 mr-10"
                htmlFor="email">
                Email
              </label>
              <input
                className="p-2 placeholder:italic border border-gray-300 rounded-lg mb-4"
                placeholder="example@gmail.com "
                type="email"
                name="email"
              />
              {/*button*/}
              <button className="w-full p-2 bg-orange-500 text-white rounded-lg">
                Reset Password
              </button>
            </div>
          </form>
          
          </div>  





        </div>
        </div>
     
     
    </div>
  );
}



export default ForgotPassword;



