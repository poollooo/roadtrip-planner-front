import React from "react";
import HeroImage from "../images/Hero-Image.svg";
import SearchBar from "./SearchBar";
import DisplayCards from "./DisplayCards";

const HomePage = () => {

  return (
    <>
      <div className="flex flex-row justify-center pb-16">
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
        <div className="flex flex-col gap-10 bg-offwhite-100 w-[80vw] p-14 rounded-2xl shadow-lg">
          <DisplayCards trip={true} headerContent={"My trips"}></DisplayCards>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-xl font-bold">
            A life without journeys is one not lived at all
          </p>
          <p className="italic text-center">
            The most visited places to go on an adventure, based on millions of
            searches.
          </p>
        </div>
        <div className="flex flex-col gap-10 w-[80vw] shadow-lg p-14 bg-offwhite-100 rounded-2xl">
          <DisplayCards
            trip={false}
            headerContent={"Popular cities"}
          ></DisplayCards>
        </div>
      </div>
    </>
  );
};

export default HomePage;
