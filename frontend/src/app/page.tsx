"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId === "admin" && password === "admin123") {
      window.location.href = "/dashboard"; // Simulated routing
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-md w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/globe.svg"
            alt="Doctor Portal Logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Doctor Portal Login
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Enter your credentials to access the dashboard
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              Doctor User ID
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition shadow-lg"
          >
            Login
          </button>
        </form>
        <div className="text-sm text-center text-gray-500 mt-6">
          &copy; {year} Doctor Portal. All rights reserved.
        </div>
      </div>
    </div>
  );
}
