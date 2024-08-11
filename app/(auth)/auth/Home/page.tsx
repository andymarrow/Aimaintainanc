import React from "react";
import Login from "../_componenets/login";
import Link from "next/link";
import Image from "next/image";
function HomePage() {
  return (
    <div className="fixed inset-0 min-h-full  bg-blue-300  ">
      {/*Navbar*/}
      <div className="flex  flex-row justify-center items-center sm:space-x-40 md:space-x-60 p-4">
        {/* Logo */}
        <div className="">
          <Image
            src="/backgroundlessAi.png"
            alt="Logo"
            width={250}
            height={250}
          />
          <div className="flex justify-center text-orange-500 text-2xl  ">
            <h2>Maintenace Request </h2>
          </div>
        </div>

        {/*Main*/}
        <div className="mb-8">
          <main className="   ">
            <Login />
          </main>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
