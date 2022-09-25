import axios from "axios";
import React, { useState, useEffect } from "react";

import PlaneLoading from "../components/PlaneLoading";

import DisplayCards from "../components/DisplayCards";

const UserProfile = () => {
  const [userTrips, setUserTrips] = useState("");
  useEffect(() => {
    const config = {
      method: "get",
      url: "https://roadtrip-planner-ih.herokuapp.com/api/trips/all",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    axios(config).then(function (res) {
      setUserTrips(res.data.trip);
    });
  }, []);
  if (!userTrips) {
    return <PlaneLoading text="Loading data" />;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <DisplayCards
          data={userTrips.filter(
            (trip) => Date.parse(trip.endDate) > Date.now()
          )}
          limit={false}
          trip={true}
          headerContent={"Next Trips"}
        />

        <DisplayCards
          data={userTrips.filter(
            (trip) => Date.parse(trip.endDate) < Date.now()
          )}
          trip={true}
          limit={false}
          headerContent={"Passed Trips"}
        />
      </div>
    </>
  );
};

export default UserProfile;
