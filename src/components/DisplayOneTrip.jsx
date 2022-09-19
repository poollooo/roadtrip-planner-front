import React from "react";
import Calendar from "./Calendar";
// import {
//   TreeViewComponent,
//   DragAndDropEventArgs,
// } from "@syncfusion/ej2-react-navigations";

const DisplayOneTrip = () => {
  //   const dataTest = [
  //     {
  //       Id: 3000,
  //       Subject: "Test 2",
  //     },
  //     {
  //       Id: 3001,
  //       Subject: "Test 2",
  //     },
  //   ];
  //   const field = { dataSource: dataTest, id: "Id", text: "Subject" };

  return (
    <div className="flex gap-[2rem]">
      {/* <div className="w-4/6"> */}
      <Calendar></Calendar>
      {/* </div> */}
    </div>
  );
};

export default DisplayOneTrip;
