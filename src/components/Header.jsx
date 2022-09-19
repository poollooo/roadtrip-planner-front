import React from "react";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import profilePic from "../images/ProfilePicture.svg";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <header className="flex flex-row justify-between bg-white px-16">
      <img src={logo} alt="Road-Trip-Planner" className="w-40 h-auto my-8 mx-8" />
      <nav className="flex flex-row justify-between items-center">
        <ul className="flex flex-row justify-between">
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
              <Link className="hover:text-green-pine">
                <button>Sign up</button>
              </Link>
            </li>
          }
        </ul>
        {isLoggedIn && (
          <Link>
            <img src={profilePic} alt="ProfilePicture" className="ml-8" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
