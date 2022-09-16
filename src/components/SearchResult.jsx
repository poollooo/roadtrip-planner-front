import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchResult = () => {
  const { city } = useParams();
  const [searchresult, setSearchResult] = useState();
  console.log(searchresult);
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

  return (
    <div className="flex flex-col text-center ">
      <h1 className="text-2xl lg:text-7xl text-center leading-relaxed">
        How to spend 5 days <br /> in {city}
      </h1>
      <p className="my-8">Sep 14 , 2002 - Sep 18 , 2022</p>

      <section className="border-2 flex flex-col items-start">
        <h2>{city}</h2>
        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, nam dicta temporibus, veritatis in rem expedita laborum, tempore ab dolor voluptatibus fuga error. Eum earum nam nobis quod asperiores soluta!</p>
      </section>
    </div>
  );
};

export default SearchResult;
