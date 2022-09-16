import React from "react";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import profilePic from "../images/ProfilePicture.svg";

const Header = () => {
  return (
    <header className="flex flex-row justify-between bg-white">
      <img
        src={logo}
        alt="Road-Trip-Planner"
        className="w-20 sm:w-30 md:w-40 lg:w-40 h-auto my-8 mx-8"
      />
      <nav className="flex flex-row justify-between items-center text-center ">
        <ul className="flex flex-row justify-between ">
          <li className="mx-4">
            <Link className="hover:text-green-pine">
              <p className="text-xs sm:text-sm md:text-md lg:text-lg">Home</p>
            </Link>
          </li>
          <li className="mx-4">
            <Link className="hover:text-green-pine">
              <p className="text-xs sm:text-sm md:text-md lg:text-lg">About</p>
            </Link>
          </li>
          <li className="mx-4">
            <Link className="hover:text-green-pine">
              <p className="text-xs whitespace-nowrap sm:text-sm md:text-md lg:text-lg">
                My Trips
              </p>
            </Link>
          </li>
        </ul>

        <Link>
          <img src={profilePic} alt="ProfilePicture" className="mx-2 sm:mx-2 md:mx-4 lg:mx-16" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
