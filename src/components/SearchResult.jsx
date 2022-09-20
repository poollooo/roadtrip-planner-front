import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SearchCategory from "./SearchCategory";
import "./SearchResult.scss";
import PlaneLoading from "./PlaneLoading";
import { ORIGIN } from "../utils/const"
import QueryContext from "../Context/QueryContext";
import SearchItemPopUp from './SearchItemPopUp'

const SearchResult = () => {
  const { city } = useParams();
  const [searchresult, setSearchResult] = useState();
  const { searchQuery } = useContext(QueryContext);
  const [currentActivity, setCurrentActivity] = useState(null); //show choosed item detail 

  useEffect(() => {
    const config = {
      method: "get",
      url: `${ORIGIN}/search/${city}`,
    };
    axios(config)
      .then(function (response) {
        setSearchResult(response.data);
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

  return (
    <div className="Search-result-container">
      <h1 className="Search-header">
        How to spend {tripDuration(searchQuery)} <br /> in {city}
      </h1>
      <p className="Search-date">{`${
        monthOfYear[searchQuery.startDate.month - 1]
      } ${searchQuery.startDate.date} - ${
        monthOfYear[searchQuery.endDate.month - 1]
      } ${searchQuery.endDate.date}`}</p>
      <section className="City-intro">
        <h2>
          <strong>{city}</strong>
        </h2>
        <p className="City-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          nam dicta temporibus, veritatis in rem expedita laborum, tempore ab
          dolor voluptatibus fuga error. Eum earum nam nobis quod asperiores
          soluta!
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

      <div>
        <Link to={`/${city}/new-trip`}>
          <button className="planning-button"> Planning My Trip </button>
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

export default SearchResult;
