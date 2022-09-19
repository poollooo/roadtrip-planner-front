import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchCategory from "./SearchCategory";
import "./SearchResult.scss";

const SearchResult = () => {
  const { city } = useParams();
  const [searchresult, setSearchResult] = useState();

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://roadtrip-planner-ih.herokuapp.com/api/search/${city}`,
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
    return <h1>Loading</h1>;
  }

  const restaurantList = searchresult.foundedCity.filter(
    (ele) => ele.category === "restaurant"
  );
  const attractionList = searchresult.foundedCity.filter(
    (ele) => ele.category === "attraction"
  );

  return (
    <div className="Search-result-container">
      <h1 className="Search-header">
        How to spend 5 days <br /> in {city}
      </h1>
      <p className="Search-date">Sep 14 , 2002 - Sep 18 , 2022</p>
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
      <SearchCategory searchresult={restaurantList} />
      <SearchCategory searchresult={attractionList} />
    </div>
  );
};

export default SearchResult;
