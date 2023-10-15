import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

// import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const userCredentials = {
      username: Username,
      password: Password,
    };

    axios
      .post("https://hotstarbackend.vercel.app/Register", userCredentials)
      .then((response) => {
        console.log("Response:", response.data);

        setError("");
        if (response.status === 201) {
          router.push("/auth/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error?.response?.data?.error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <span className="text-5xl text-white">Register</span>

      <form
        className="w-1/2 p-8 bg-transparent shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-2 mb-2 md:grid-cols-2 m-auto p-auto align-middle justify-end text-center">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)} // Update the state on input change
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Password
            </label>
            <input
              type="password" // Use type="password" for password input
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)} // Update the state on input change
              required
            />
          </div>
          {/* Center the submit button */}
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <p style={{ color: "white" }}>{error}</p>
    </div>
  );
}
