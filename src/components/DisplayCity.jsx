import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SearchCategory from "./SearchCategory";
import "./SearchResult.scss";
import PlaneLoading from "./PlaneLoading";
import { ORIGIN } from "../utils/const"
import QueryContext from "../Context/QueryContext";
import SearchItemPopUp from './SearchItemPopUp'
import ButtonComponent from "./ButtonComponent";

const DisplayCity = () => {
  const { city } = useParams();
  const [cityData, setCityData] = useState("");
  console.log('cityData is :', cityData)

  const [searchresult, setSearchResult] = useState();
  const { searchQuery } = useContext(QueryContext);
  const [currentActivity, setCurrentActivity] = useState(null); //show choosed item detail 
  console.log('search result is', searchresult)

  useEffect(() => {
    const config = {
      method: "get",
      url: `${ORIGIN}/search/${city}`,
    };
    const config2 = {
      method: "get",
      url: `${ORIGIN}/cities/${city}`,
    };
    axios(config)
      .then(function (response) {
        setSearchResult(response.data);
        axios(config2)
          .then(function (response) {
            console.log('response is :', response.data)
            setCityData(response.data);
          })
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [city]);

  if (!searchresult) {
    return (
      <PlaneLoading text={"Finding the coolest things to do"} />
    )
  }

  const restaurantList = searchresult.newActivityList.filter(
    (ele) => ele.category === "restaurant"
  );
  const attractionList = searchresult.newActivityList.filter(
    (ele) => ele.category === "attraction"
  );

  const tripDuration = (searchQuery) => {
    let day = searchQuery.endDate.date - searchQuery.startDate.date;
    let month = searchQuery.endDate.month - searchQuery.startDate.month;
    let year = searchQuery.endDate.year - searchQuery.startDate.year;
    year = year !== 0 ? `${year} Year` : "";
    month = month !== 0 ? `${month} month` : "";
    day = day > 1 ? `${day} days` : `${day} day`;
    return `${year}  ${month}  ${day} `;
  };

  const monthOfYear = [
    "Jan",
    "Fev",
    "Mars",
    "April",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // find is there is a NaN in the tripDuration
  const isTripDurationNaN = tripDuration(searchQuery).includes("NaN");
  console.log('tripDuration is', isTripDurationNaN)

  return (
    <div className="Search-result-container">
      {!isTripDurationNaN &&
        <>
          <h1 className="Search-header leading-tight w-full">
            How to spend {tripDuration(searchQuery)} in {city.charAt(0).toUpperCase() + city.slice(1)}
          </h1>
          <p className="Search-date">{`${monthOfYear[searchQuery.startDate.month - 1]
            } ${searchQuery.startDate.date} - ${monthOfYear[searchQuery.endDate.month - 1]
            } ${searchQuery.endDate.date}`}
          </p>
        </>
      }
      <section className="City-intro rounded-lg shadow-lg bg-gray-50 leading-normal">
        <h2>
          <strong>{city.charAt(0).toUpperCase() + city.slice(1)}</strong>
        </h2>
        <p className="City-description">
          {cityData?.description}
        </p>
      </section>
      <SearchCategory
        searchresult={restaurantList}
        setCurrentActivity={setCurrentActivity}
      />
      <SearchCategory
        searchresult={attractionList}
        setCurrentActivity={setCurrentActivity}
      />

      <div className="pt-4 pb-12">
        <Link to={`/${city}/new-trip`}>
          <ButtonComponent text={"Create a new trip"} width={"w-[20vw]"}
            onClick={() => window.scrollTo(0, 0)}
          />
        </Link>

      </div>
      {currentActivity && (
        <SearchItemPopUp
          setcurrentactivity={setCurrentActivity}
          currentactivity={currentActivity}
        />
      )}
    </div>
  );
};

export default DisplayCity;
