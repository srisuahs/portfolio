import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        <h1 className="text-2xl font-bold">
          <span className="bg-lime-400 text-black px-2 py-1">
            SRI SUHAS
          </span>
        </h1>

        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-lime-400 font-bold" : "hover:text-lime-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-lime-400 font-bold" : "hover:text-lime-400"
            }
          >
            Projects
          </NavLink>
        </div>

      </div>
    </nav>
  );
}