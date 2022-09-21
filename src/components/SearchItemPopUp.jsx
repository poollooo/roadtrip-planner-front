import React from "react";
import "./SearchItemPopUp.scss";

const SearchItemPopUp = ({ currentactivity, setcurrentactivity }) => {
  return (
    <section className="pop-up-container">
      <h1>About</h1>
      <div className="pop-up-header">
        <div className="pop-up-picture">
          <picture>
            <img src={currentactivity.photo[0]} alt="details" />
          </picture>
        </div>

        <div className="pop-up-description">
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
          <p>
            <a href={`${currentactivity.tripAdvisorUrl}`}>
              More Info : Trip Advisor
            </a>
          </p>

          <button
            className="close-detail"
            onClick={() => {
              setcurrentactivity(null);
            }}
          >
            <strong>X</strong>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchItemPopUp;
