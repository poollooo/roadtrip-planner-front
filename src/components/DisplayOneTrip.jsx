import React from "react";
import Calendar from "./Calendar";
import { activities } from "./data-test";

const DisplayOneTrip = () => {
  return (
    <div className="flex gap-[2rem]">
      {/* <div className="w-4/6"> */}
      <Calendar activitiesList={activities.newActivityList}></Calendar>
      {/* </div> */}
    </div>
  );
};

export default DisplayOneTrip;
