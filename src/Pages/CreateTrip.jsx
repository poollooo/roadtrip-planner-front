import React, { useContext } from "react";
import Calendar from "../components/Calendar";
import QueryContext from "../Context/QueryContext";

const CreateTrip = () => {
  const { searchQuery } = useContext(QueryContext);

  return (
    <div className="flex gap-[2rem]">
      {/* <div className="w-4/6"> */}
      <Calendar
        startDate={
          new Date(
            searchQuery.startDate.year,
            searchQuery.startDate.month - 1,
            searchQuery.startDate.date
          )
        }
        endDate={
          new Date(
            searchQuery.endDate.year,
            searchQuery.endDate.month - 1,
            searchQuery.endDate.date
          )
        }
      ></Calendar>
      {/* </div> */}
    </div>
  );
};

export default CreateTrip;
