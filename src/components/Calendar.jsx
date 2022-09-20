import React, { useContext, useRef, useState } from "react";
import "./material.css";
import "./event.css";
import restIcon from "../images/restaurant-icon.png";
import actIcon from "../images/activities-icon.png";
import axios from "axios";
import { SearchContext } from "../Context/SearchResultContext";

import {
  Inject,
  ScheduleComponent,
  Day,
  ViewsDirective,
  ViewDirective,
  DragAndDrop,
  Resize,
} from "@syncfusion/ej2-react-schedule";

import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";

const Calendar = () => {
  // const activitiesList = props.activitiesList;
  const { selectedExperience, setSelectedExperience } =
    useContext(SearchContext);
  const myRef = useRef();
  // const datal =
  const onDragStart = (drag) => {
    drag.navigation.enable = true;
    drag.navigation.timeDelay = 1000;
  };

  console.log(selectedExperience);
  const data = {
    dataSource: selectedExperience.map(
      ({ activityLocationId, name, category, address, rawRating }) => ({
        id: activityLocationId,
        name,
        category,
        address,
        rawRating,
      })
    ),
    id: "id",
    text: "name",
    category: "category",
    address: "address",
    rawRating: "rawRating",
  };

  //defining new display for activties list
  const nodeTemplate = (data) => {
    return (
      <div className="flex justify-start items-center gap-2 w-full font-medium text-sm h-[3.125rem]">
        <img
          src={data.category === "restaurant" ? restIcon : actIcon}
          alt="temp"
          className="h-8 "
        />
        <p>{data.name}</p>
        <p className="text-xs italic">{Math.round(data.rawRating)}</p>
      </div>
    );
  };

  //redifining the display of activities in the calendar
  const templateEvent = (data) => {
    return <div>{data.Subject}</div>;
  };

  // const popupDetail = (activityData) => {
  //
  //   return (
  //     <div className="custom-event-editor">
  //       <p>Activity name : {activityData.Subject}</p>
  //       <p>Location :</p>
  //     </div>
  //   );
  // };

  //allow to add event do to the scheduler
  const onDragStop = (event) => {
    const cellData = myRef.current.getCellDetails(event.target);
    const newEvent = {
      Subject: event.draggedNodeData.text,
      StartTime: cellData.startTime,
      EndTime: cellData.endTime,
      IsAllDay: false,
    };

    myRef.current.openEditor(newEvent, "Add", true);
    // setList(
    //   activitiesList.map(
    //     (e) => e.activityLocationId !== event.draggedNodeData.activityLocationId
    //   )
    // );
    setSelectedExperience((prevState) => {
      const keepExp = prevState.filter((ele) => {
        console.log("ele", ele.activityLocationId);
        console.log("item", event.draggedNodeData.id);
        return ele.activityLocationId !== Number(event.draggedNodeData.id);
      });
      return [...keepExp];
    });
  };

  //exporting Planning to the database
  const scheduleValidation = async () => {
    if (myRef.current.eventsData.length === 0) {
      console.log("No data here");
      return;
    }

    //add verification if user is connected. If not, store url and data in the url
    const newActivityList = myRef.current.eventsData.map((event) => ({
      startDate: event.startTime,
      endDate: event.endTime,
      activityLocationId: event.id,
    }));

    await axios
      .post(
        "https://roadtrip-planner-ih.herokuapp.com/api/trips/",
        newActivityList
      )
      .then((e) => console.log("yepa"));
  };

  return (
    <>
      <div className="w-4/6">
        <div className="flex justify-end">
          <button
            className="bg-[#03666b] p-2 m-2 border-r text-white"
            onClick={scheduleValidation}
          >
            Save My Trip
          </button>
        </div>
        <ScheduleComponent
          workHours={{
            highlight: true,
            start: "7:00",
            end: "23:00",
          }}
          ref={myRef}
          dragStart={onDragStart}
          isResponsive={true}
        >
          <ViewsDirective>
            <ViewDirective
              option="Day"
              startHour="08:00"
              endHour="24:00"
            ></ViewDirective>
            <ViewDirective
              option="Day"
              interval={3}
              isSelected={true}
              displayName="3 Days"
              startHour="08:00"
              endHour="24:00"
            ></ViewDirective>
            <ViewDirective
              option="Day"
              interval={10}
              displayName="All Trip"
              startHour="08:00"
              endHour="24:00"
            ></ViewDirective>
          </ViewsDirective>
          <Inject services={[Day, DragAndDrop, Resize]} />
        </ScheduleComponent>
      </div>
      <div className="w-2/6 mt-[56px]">
        <p>Activities list </p>
        <TreeViewComponent
          fields={data}
          allowDragAndDrop={true}
          nodeDragStop={onDragStop}
          nodeTemplate={nodeTemplate}
        />
      </div>
    </>
  );
};

export default Calendar;
