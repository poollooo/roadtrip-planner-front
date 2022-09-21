import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar";

const DisplayOneTrip = () => {
  const [tripData, setTripData] = useState("");
  const param = useParams().tripId;

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const config = {
      method: "get",
      url: "http://localhost:3003/api/trips/" + param,
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

  return (
    <>
      <div className="flex justify-center">
        <Calendar tripData={tripData} readOnly={true} focus={true}></Calendar>
      </div>
    </>
  );
};

export default DisplayOneTrip;
