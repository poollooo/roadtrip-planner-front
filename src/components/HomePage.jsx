import React from "react";
import HeroImage from "../images/Hero-Image.svg";
import SearchBar from "./SearchBar";
import DisplayCards from "./DisplayCards";

const HomePage = () => {
  return (
    <div className="flex flex-row justify-center py-8">
      <div className="items-center">
        <img src={HeroImage} alt="logo" className="w-[80vw]" />
        <SearchBar />
      </div>
    </div>
      <div className="flex flex-col align-center gap-20">
        <div className="flex flex-col gap-10">
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
        <div className="flex flex-col gap-10">
          <DisplayCards
            trip={false}
            headerContent={"Popular cities"}
          ></DisplayCards>
        </div>
      </div>
  );
};

export default HomePage;
