import React, { useContext } from "react";
import HeroImage from "../images/Hero-Image.svg";
import SearchBar from "../components/SearchBar";
import DisplayCards from "../components/DisplayCards";
import { AuthContext } from "../Context/AuthContext";

const HomePage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-row justify-center pb-16 mt-[-5vh]">
        <div className="items-center relative">
          <div>
            <img src={HeroImage} alt="logo" className="w-[80vw]" />
          </div>
          <div className="absolute bottom-16 w-[100%] py-8">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="flex flex-col align-center items-center gap-20 pb-16">
        {isLoggedIn && (
          <DisplayCards trip={true} headerContent={"My trips"} limit={true} />
        )}
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-xl font-bold">
            A life without journeys is one not lived at all
          </p>
          <p className="italic text-center">
            The most visited places to go on an adventure, based on millions of
            searches.
          </p>
        </div>
        <DisplayCards trip={false} headerContent={"Popular cities"} />
      </div>
    </>
  );
};

export default HomePage;
