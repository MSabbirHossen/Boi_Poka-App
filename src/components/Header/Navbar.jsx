import React from "react";
import { Link, Links } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to={"/"}>
        <li className="m-2 active:underline active:text-[#23be0a] hover:cursor-pointer">
          Home
        </li>
      </Link>
      <Link to={"/about"}>
        <li className="m-2 active:underline active:text-[#23be0a] hover:cursor-pointer">
          About
        </li>
      </Link>
      <li className="m-2 active:underline active:text-[#23be0a] hover:cursor-pointer">
        Listed Books
      </li>
      <li className="m-2 active:underline active:text-[#23be0a] hover:cursor-pointer">
        Pages to Read
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-2">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="font-bold text-2xl">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#23be0a] rounded-lg">Sign In</a>
        <a className="btn bg-[#59c6d2] rounded-lg ml-3">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
