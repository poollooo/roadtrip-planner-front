import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { ORIGIN } from "../utils/const";
import IsPrivate from "./isPrivate";
import formatDate from "../utils/formatDate";

const DisplayCards = ({ headerContent, trip }) => {
  const [cities, setCities] = useState();
  const [trips, setTrips] = useState();

  useEffect(() => {
    axios
      .get(`${ORIGIN}/cities`)
      .then((response) => {
        // If the server verifies that JWT token is valid
        setCities(response.data.allCities);
      })
      .catch((error) => {
        // If the server sends an error response (invalid token)
        // Update state variables
        console.log(error);
      });

    const config = {
      method: "get",
      url: "https://roadtrip-planner-ih.herokuapp.com/api/trips/all",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    axios(config).then(function (res) {
      setTrips(res.data.trip);
    });
  }, []);
  if (!trips) {
    return <h1>Load</h1>;
  }

  console.log(trips);

  return (
    <div className="flex flex-col w-[80vw] shadow-lg p-14 bg-offwhite-100 rounded-2xl">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex justify-between">
          <p className="font-bold text-2xl">{headerContent}</p>
          {trip && <p className="text-lg self-end">See All</p>}
        </div>
        {/* List of trip */}
        <div className="flex flex-col lg:flex-row justify-start gap-10 items-center ">
          {!trip &&
            cities &&
            cities?.slice(0, 3).map((city) => {
              return (
                <Card
                  // add the city name with the first letter in capital
                  title={city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                  // add the first 10 words of the city description and add "..."
                  desc={
                    city.description.split(" ").slice(0, 10).join(" ") + "..."
                  }
                  city={city.name}
                  image={city.image}
                  key={city._id}
                />
              );
            })}

          {trip &&
            trips?.slice(0, 3).map((trip) => {
              return (
                <Card
                  // add the trip name with the first letter in capital
                  title={
                    "Your trip to " +
                    trip.cityId.name.charAt(0).toUpperCase() +
                    trip.cityId.name.slice(1)
                  }
                  // add the first 10 words of the trip description and add "..."
                  desc={
                    formatDate(trip.startDate) +
                    " to " +
                    formatDate(trip.endDate)
                  }
                  city={
                    "/users/" +
                    localStorage.getItem("user") +
                    "/trips/" +
                    trip._id
                  }
                  image={trip.cityId.image}
                  key={trip._id}
                  isTrip={true}
                />
              );
            })}
          {trip && trips.length < 1 && (
            <p className="italic text-center">No trips yet :(</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayCards;
