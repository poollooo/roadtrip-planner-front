import React from "react";
import iconLoc from "../images/localisation-icon.png";

const Card = (props) => {
  const { title, desc } = props;
  return (
    <div className="flex flex-col gap-1 w-80">
      {/* images */}
      <div className="h-4/5  w-full lg:w-80">
        <img
          src="https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-|-630x405-|-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-|-630x405-|-%C2%A9-Fotolia.jpg"
          className="h-64 lg:h-72 object-cover rounded-xl shadow-lg shadow-gray-400/40 "
          alt="bla"
        />
      </div>
      {/* loc icon */}
      <div className="flex items-center gap-1 lg:h-1/5 rounded-b-md pt-2">
        <img src={iconLoc} alt="location point" className="w-8 h-8" />
        {/* TRIP info */}
        <div>
          <p className="font-bold ">{title}</p>
          <p className="italic text-xs">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
