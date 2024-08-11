import React from "react";
import Background from "@/public/robot.jpg";
function ForgotPassword() {
  return (
    <div className="flex justify-center gap-20 items-center min-h-screen p-32 bg-blue-300  ">
      <div className="text-black font-bold text-3xl">No Worries!!</div>
      <div className="w-full max-w-md">
        <form
          className="relative w-96  bg-white bg-opacity-10 backdrop-filter 
                          backdrop-blur-lg  border border-opacity-30 border-white shadow-lg-white p-6 rounded-lg  "
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Forgot Password?
          </h2>
          <h3 className="pb-4 text-center">
            Please enter your email below correctly.
          </h3>
          {/*Email*/}
          <div className="mb-2">
            <label
              className="mb-2 text-sm font-medium text-gray-700 mr-10"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="example@gmail.com"
              type="email"
              id="email"
            />
            {/*button*/}
            <button className="w-1/2 p-2 bg-orange-500 text-white rounded-lg">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
