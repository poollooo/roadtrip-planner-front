import React from "react";
import DisplayCards from "./DisplayCards";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col align-center gap-20">
        <div className="flex flex-col gap-10">
          <DisplayCards trip={true} headerContent={"My trips"}></DisplayCards>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-xl font-bold">
            A life without journeys is one not lived at all
          </p>
          <p className="italic">
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
    </>
  );
};

export default HomePage;
