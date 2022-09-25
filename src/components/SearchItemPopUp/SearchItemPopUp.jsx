import React from "react";
import "./SearchItemPopUp.scss";

const SearchItemPopUp = ({ currentactivity, setcurrentactivity }) => {
  return (
    <section className="pop-up-container">
      <div className="pop-up-header">
        <h6 className="pop-up-about ">About</h6>
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

        <div className="pop-up-description text-sm">
          <h2>{currentactivity.name}</h2>
          <p>
            <strong>Address:</strong> {currentactivity.address}
          </p>
          <p>
            <strong>Phone:</strong> {currentactivity.phone}
          </p>

          {currentactivity.description.length > 1 ? (
            <p>
              <strong>Description :</strong>{" "}
              <span className="">{currentactivity.description}</span>
            </p>
          ) : null}
          <p>
            <strong>Rating :</strong> {currentactivity.rawRating.toFixed(1)} for
            a total of{" "}
            <span className="italic">
              {currentactivity.numberOfReviews + " "}
            </span>
            reviews
          </p>

          <p>
            <a target="_blank" href={`${currentactivity.tripAdvisorUrl}`}>
              <strong>More Info :</strong> See on{" "}
              <span className="bold">Trip Advisor</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchItemPopUp;
