import React, { useState } from "react";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import profilePic from "../images/ProfilePicture.svg";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const storedUsername = localStorage.getItem("user");

  return (
    <header className="flex flex-row justify-between bg-white ">
      <Link to="/" className="w-1/5 sm:w-1/6 h-auto my-8 mx-8">
        <img
          src={logo}
          alt="Road-Trip-Planner"
        />
      </Link>
      <nav className="flex justify-between items-center text-center ">
        <ul className="flex justify-between text-xs sm:text-sm md:text-md whitespace-nowrap ">
          <li className="mx-4">
            <Link to='/' className="hover:text-green-pine">
              <p>Home</p>
            </Link>
          </li>
          <li className="mx-4">
            <Link className="hover:text-green-pine">
              <p>About</p>
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="mx-4">
                <Link className="hover:text-green-pine">
                  <p>My Trips</p>
                </Link>
              </li>
              <li className="mx-4">
                <Link className="hover:text-green-pine">
                  <button onClick={logOutUser}>Logout</button>
                  <span>{user && user.name}</span>
                </Link>
              </li>
            </>
          ) :
            <li className="mx-4">
              <Link to="/signup" className="hover:text-green-pine">
                <button>Sign up</button>
              </Link>
            </li>
          }
        </ul>
        {isLoggedIn && (
          <Link to={`/users/${storedUsername}`} >
            <img src={profilePic} alt="ProfilePicture" className="ml-8" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
