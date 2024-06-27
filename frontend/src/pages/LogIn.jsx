import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="h-screen w-screen bg-zinc-900 flex items-center justify-center">
      {/* Container */}
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full max-w-md">
        <p className="text-zinc-200 text-xl">Log In</p>
        {/* Username Input */}
        <div className="mt-4">
          <div>
            <label htmlFor="username" className="text-zinc-400">
              Username
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="username"
              name="username"
              required
            />
          </div>
        </div>
        {/* Password Input */}
        <div className="mt-4">
          <label htmlFor="password" className="text-zinc-400">
            Password
          </label>
          <input
            type="password"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="password"
            name="password"
            required
          />
        </div>
        {/* Login Button */}
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">
            Log In
          </button>
        </div>
        {/* Sign Up Link */}
        <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
          Don't have an account? <Link to="/signup" className="ml-2 text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
