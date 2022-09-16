import React from "react";
import Card from "./Card";

const DisplayCards = (props) => {
  const { headerContent, trip } = props;

  return (
    <div className=" flex flex-col gap-5 w-full lg:w-fit ">
      {/* Header */}
      <div className="flex justify-between ">
        <p className="font-bold text-2xl">{headerContent}</p>
        {trip && <p className="text-lg self-end">See All</p>}
      </div>
      {/* List of trip */}
      <div className="flex flex-col lg:flex-row justify-start gap-7 items-center min-w-fit ">
        <Card title="5 days to Paris" desc="Sept 2022 05 - Sept 2022 07"></Card>
        <Card title="5 days to Paris" desc="Sept 2022 05 - Sept 2022 07"></Card>
        <Card title="5 days to Paris" desc="Sept 2022 05 - Sept 2022 07"></Card>
      </div>
    </div>
  );
};

export default DisplayCards;
