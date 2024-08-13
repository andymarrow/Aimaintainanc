import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Login() {
  const [password, setPassword] = useState(" ");
  const [username, setUsername] = useState(" ");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        switch (data.role) {
          case "admin":
            router.push("/admin");
            break;
          case "employee":
            router.push("/employee");
            break;
          case "deparment_head":
            router.push("/department_head");
            break;
          case "maintenance_head":
            router.push("/maintenance_head");
            break;
          case "technician":
            router.push("/technician");
            break;
          default:
            router.push("/");
        }
      } else {
        alert("Credentials Wrong");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while trying to log in");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form
          className=" w-96 bg-white bg-opacity-10 backdrop-filter 
        backdrop-blur-lg  border border-opacity-30 border-white shadow-lg-white p-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-950">
            Login
          </h2>

          {/*username*/}
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg "
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/*Password*/}
          <div className="mb-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/*Remeber me*/}
          <div className=" flex mb-2">
            <label className="">
              <input
                type="checkbox"
                className="form-checkbox h-3 w-3 border-gray-300 rounded"
              />
              <span className="text-xs ">Remember Me</span>
            </label>
          </div>

          {/*button*/}

          <button
            type="submit"
            className="w-full p-2 bg-blue-950 text-white rounded-lg"
          >
            Login
          </button>

          {/*Forgot password*/}
          <div className="flex justify-center w-full p-4 text-xs text-blue-950">
            <Link href={"/auth/ForgotPassword"}>Forgot Password?</Link>
          </div>

          {/*Terms and conditions, support*/}
          <div className="flex justify-center pt-2">
            <span className="text-xs text-blue-950"> Support</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
