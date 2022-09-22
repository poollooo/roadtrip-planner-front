import React from "react";
import "./SearchItemPopUp.scss";

const SearchItemPopUp = ({ currentactivity, setcurrentactivity }) => {
  return (
    <section className="pop-up-container">


      <div className="pop-up-header">
        <h1 className="pop-up-about">About</h1>
        <button
          className="close-pop-up"
          onClick={() => {
            setcurrentactivity(null);
          }}
        >
          <strong>X</strong>
        </button>
      </div>

      <div className="pop-up-detail">
        <picture>
          <img src={currentactivity.photo[0]} alt="details" />
        </picture>

        <div className="pop-up-description">
          <h2>{currentactivity.name}</h2>
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
            <a target="_blank" href={`${currentactivity.tripAdvisorUrl}`}>
              <strong>More Info :</strong> Trip Advisor
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchItemPopUp;
