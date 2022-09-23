import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../components/DisplayCity/DisplayCity.scss";
import { useParams } from "react-router-dom";
import Calendar from "../components/Calendar";
import { ORIGIN } from "../utils/const";
import LoadingPlane from "../components/PlaneLoading";
import formatDate from "../utils/formatDate";

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

  const data = {
    dataSource: tripData.activitiesFound.map((activity, index) => ({
      Id: index + 1,
      Subject: activity.activityId.name,
      StartTime: activity.startDate,
      EndTime: activity.endDate,
    })),
  };

  return (
    <>
      <div className="Search-result-container">
        <div>
          <h1 className="Search-header leading-tight w-full">
            Your trip
            <span className="italic">{tripData.tripFound.name}</span>
          </h1>
          <p className="Search-date">
            from {formatDate(tripData.tripFound.startDate)} to{" "}
            {formatDate(tripData.tripFound.endDate)}
          </p>
        </div>

        <div className="flex justify-center">
          <Calendar
            tripData={data}
            startDate={tripData.tripFound.startDate}
            readOnly={true}
            focus={true}
          ></Calendar>
        </div>
      </div>
    </>
  );
};

export default DisplayOneTrip;
