import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Calendar from "../components/Calendar";
import { ORIGIN } from "../utils/const";
import LoadingPlane from "../components/PlaneLoading";

const DisplayOneTrip = () => {
  const [tripData, setTripData] = useState("");
  const { tripId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const config = {
      method: "get",
      url: `${ORIGIN}/trips/` + tripId,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setTripData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (tripData === "") {
    return <LoadingPlane />;
  }
  console.log(tripData);
  const data = {
    dataSource: tripData.activitiesFound.map((activity, index) => ({
      Id: index + 1,
      Subject: activity.activityId.name,
      StartTime: activity.startDate,
      EndTime: activity.endDate,
    })),
  };
  console.log(tripData);
  return (
    <>
      <div className="flex justify-center">
        <Calendar
          tripData={data}
          startDate={tripData.tripFound.startDate}
          readOnly={true}
          focus={true}
        ></Calendar>
      </div>
    </>
  );
};

export default DisplayOneTrip;
