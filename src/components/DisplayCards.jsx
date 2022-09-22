import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { ORIGIN } from "../utils/const"

const DisplayCards = ({ headerContent, trip }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState();
  console.log(cities)
  console.log('ORIGIN IS :', ORIGIN)

  useEffect(() => {
    axios.get(`${ORIGIN}/cities`)
      .then((response) => {
        // If the server verifies that JWT token is valid
        setCities(response.data.allCities)
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) 
        // Update state variables         
        console.log(error)
      });
  }, []);

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
          {cities && cities?.slice(0, 3).map((city) => {
            return (
              <Card
                // add the city name with the first letter in capital
                title={city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                desc="Sept 2022 05 - Sept 2022 07"
                image={city.image}
                key={city._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayCards;
