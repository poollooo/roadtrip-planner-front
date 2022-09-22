import React from "react";
import { Link } from "react-router-dom";
import iconLoc from "../images/localisation-icon.png";

const Card = ({ title, desc, image, city }) => {
  return (
    <div className="flex flex-col gap-1 w-80">
      {/* images */}
      <div>
        <img
          src={image}
          className="h-64 lg:h-72 object-cover w-full rounded-xl shadow-lg shadow-gray-400/40 "
          alt="bla"
        />
      </div>
      {/* loc icon */}
      <div className="flex items-center gap-1 lg:h-1/5 pt-2">
        <img src={iconLoc} alt="location point" className="w-8 h-8" />
        {/* TRIP info */}
        <div>
          <p className="font-bold ">{title}</p>
          <p className="italic text-xs">{desc}
            {city &&
              <span className="ml-2 font-medium hover:text-green-pine">

                <Link
                  to={city}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read more</Link>
              </span>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
