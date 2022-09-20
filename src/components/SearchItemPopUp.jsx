import React from "react";
import { Navigate } from "react-router-dom";
import "./SearchItemPopUp.scss";

const SearchItemPopUp = ({ currentactivity, setcurrentactivity }) => {
  return (
    <section className="pop-up-container">
      <div>
        <picture>
          <img src={currentactivity.photo[0]} alt="details" />
        </picture>
      </div>

      <div>
        <h1>{currentactivity.name}</h1>
        <p>{currentactivity.address}</p>
        <p>{currentactivity.phone}</p>
        {currentactivity.description.length > 1 ? (
          <p>
            <strong>Description :</strong> {currentactivity.description}
          </p>
        ) : null}
        <p>
          <strong>Number Of Views :</strong> {currentactivity.numberOfReviews}
        </p>
        <p>
          <strong>Rating :</strong> {currentactivity.rawRating.toFixed(1)}
        </p>
        {/* <Navigate to={`${currentactivity.tripAdvisorUrl}`}>
          <p>Trip Advisor Find More</p>
        </Navigate> */}

        <div onClick={()=>{setcurrentactivity(null)}}>X</div>
      </div>
    </section>
  );
};

export default SearchItemPopUp;

// activityLocationId: 24053677;
// address: "78 Av. Du Dr Arnold Netter, 75012 Paris France";
// category: "restaurant";
// cityLocationId: 187147;
// createdAt: "2022-09-01T15:46:54.332Z";
// description: "";
// hours: (7)[
//   (Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2))
// ];
// name: "La Sorbonne";
// numberOfReviews: "80";
// phone: "+33 9 53 47 14 84";
// photo: ["https://media-cdn.tripadvisor.com/media/photo-p/23/61/52/83/logo.jpg"];
// priceLevel: "$$ - $$$";
// priceRange: "$10 - $20";
// ranking: "#5 of 17,797 Results";
// rawRating: 4.833651065826416;
// tripAdvisorUrl: "https://www.tripadvisor.com/Restaurant_Review-g187147-d24053677-Reviews-La_Sorbonne-Paris_Ile_de_France.html";
// updatedAt: "2022-09-01T15:46:54.332Z";
// __v: 0;
// _id: "6310d3ee96a0702eb8e5f279";
