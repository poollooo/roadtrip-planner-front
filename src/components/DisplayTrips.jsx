import React from "react";
import iconLoc from "../images/localisation-icon.png";

const DisplayTrips = () => {
  return (
    <div className=" flex flex-col gap-3 lg:w-fit m-auto">
      {/* Header */}
      <div className="flex justify-between">
        <p className="font-bold text-2xl">My Trips</p>
        <p className="text-lg self-end">See All</p>
      </div>
      {/* List of trip */}
      <div className="flex justify-center gap-3 items-center overflow-auto">
        {/* TRIP */}
        <div className="flex flex-col gap-1 ">
          {/* images */}
          <div className="h-4/5  w-[full] lg:w-[18.25rem]">
            <img
              src="https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-|-630x405-|-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-|-630x405-|-%C2%A9-Fotolia.jpg"
              className="h-[12.25rem] lg:h-[16.25rem] object-cover rounded-md shadow-lg shadow-gray-400/40 "
              alt="bla"
            />
          </div>
          {/* loc icon */}
          <div className="flex items-center gap-1 lg:h-1/5 rounded-b-md pt-2">
            <img
              src={iconLoc}
              alt="location point"
              className="w-[2rem] h-[2rem]"
            />
            {/* TRIP info */}
            <div>
              <p className="font-bold text-s ">5 days to Paris</p>
              <p className=" text-s italic text-xs">
                Sept 2022 05 - Sept 2022 07
              </p>
            </div>
          </div>
        </div>
        {/* TRIP */}
        <div className="flex flex-col gap-1 ">
          {/* images */}
          <div className="h-4/5  w-[full] lg:w-[18.25rem]">
            <img
              src="https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-|-630x405-|-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-|-630x405-|-%C2%A9-Fotolia.jpg"
              className="h-[12.25rem] lg:h-[16.25rem] object-cover rounded-md shadow-lg shadow-gray-400/40 "
              alt="bla"
            />
          </div>
          {/* loc icon */}
          <div className="flex items-center gap-1 lg:h-1/5 rounded-b-md pt-2">
            <img
              src={iconLoc}
              alt="location point"
              className="w-[2rem] h-[2rem]"
            />
            {/* TRIP info */}
            <div>
              <p className="font-bold text-s ">5 days to Paris</p>
              <p className=" text-s italic text-xs">
                Sept 2022 05 - Sept 2022 07
              </p>
            </div>
          </div>
        </div>
        {/* TRIP */}
        <div className="flex flex-col gap-1 ">
          {/* images */}
          <div className="h-4/5  w-[full] lg:w-[18.25rem]">
            <img
              src="https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-|-630x405-|-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-|-630x405-|-%C2%A9-Fotolia.jpg"
              className="h-[12.25rem] lg:h-[16.25rem] object-cover rounded-md shadow-lg shadow-gray-400/40 "
              alt="bla"
            />
          </div>
          {/* loc icon */}
          <div className="flex items-center gap-1 lg:h-1/5 rounded-b-md pt-2">
            <img
              src={iconLoc}
              alt="location point"
              className="w-[2rem] h-[2rem]"
            />
            {/* TRIP info */}
            <div>
              <p className="font-bold text-s ">5 days to Paris</p>
              <p className=" text-s italic text-xs">
                Sept 2022 05 - Sept 2022 07
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTrips;
