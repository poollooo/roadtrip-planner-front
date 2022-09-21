import React, { useContext } from "react";
import Calendar from "./Calendar";

const CreateTrip = () => {
  return (
    <div className="flex gap-[2rem]">
      {/* <div className="w-4/6"> */}
      <Calendar></Calendar>
      {/* </div> */}
    </div>
  );
};

export default CreateTrip;
