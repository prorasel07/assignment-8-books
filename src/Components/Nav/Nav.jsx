import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const link = <></>;

  return (
    <div className="flex gap-3 items-center p-3 text-black">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="border border-[#23BE0A] text-[#23BE0A]">Home</a>
              </li>
              <li>
                <a>Listed Books</a>
              </li>
              <li>
                <a>Pages to Read</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center px-1 gap-4">
            <li focus>
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return isActive
                    ? "border border-[#23BE0A] text-[#23BE0A] px-4 py-2 rounded-md "
                    : "px-4 py-2 rounded-md ";
                }}
              >
                Home
              </NavLink>
            </li>
            <li focus="bg-white">
              <NavLink
                 className={({ isActive }) => {
                  return isActive
                    ? "border border-[#23BE0A] text-[#23BE0A] px-4 py-2 rounded-md "
                    : "px-4 py-2 rounded-md ";
                }}
                to={"listed-books"}
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
               className={({ isActive }) => {
                return isActive
                  ? "border border-[#23BE0A] text-[#23BE0A] px-4 py-2 rounded-md "
                  : "px-4 py-2 rounded-md ";
              }}
                to={"pages-to-read"}
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#23BE0A] text-white mr-4">Sing in</a>
          <a className=" btn bg-[#59C6D2] text-white">Sing up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
