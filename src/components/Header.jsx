import React from "react";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import profilePic from "../images/ProfilePicture.svg";

const Header = () => {
  return (
    <header className="flex flex-row justify-between bg-white ">
      <img
        src={logo}
        alt="Road-Trip-Planner"
        className="w-1/5 sm:w-1/6 h-auto my-8 mx-8"
      />
      <nav className="flex justify-between items-center text-center ">
        <ul className="flex justify-between text-xs sm:text-sm md:text-md whitespace-nowrap ">
          <li className="mx-4">
            <Link className="hover:text-green-pine">
              <p>Home</p>
            </Link>
          </li>
          <li className="mx-4">
            <Link className="hover:text-green-pine">
              <p>About</p>
            </Link>
          </li>
          <li className="mx-4">
            <Link className="hover:text-green-pine">
              <p>My Trips</p>
            </Link>
          </li>
        </ul>

        <Link>
          <img
            src={profilePic}
            alt="ProfilePicture"
            className="mx-2 w-2/5  sm:w-3/6 md:w-4/6 "
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
