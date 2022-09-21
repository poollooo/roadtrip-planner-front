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
import { useNavigate } from "react-router-dom";

const Calendar = ({ tripData, readOnly, focus }) => {
  const { selectedExperience } = useContext(SearchContext);
  const [schedulerEventData, setSchedulerEventData] =
    useState(selectedExperience);
  const myRef = useRef();
  let data2 = "";
  const navigate = useNavigate();
  const onDragStart = (drag) => {
    drag.navigation.enable = true;
    drag.navigation.timeDelay = 1000;
  };
  if (!tripData && readOnly) {
    return <p>loading</p>;
  }

  const data = {
    dataSource: schedulerEventData.map(
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
  if (readOnly) {
    const data2 = {
      dataSource: tripData.map((activity, index) => ({
        Id: index,
        Subject: activity.activityId.name,
        StartTime: activity.startDate,
        EndTime: activity.endDate,
      })),
    };
  }
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
  // const templateEvent = (data) => {
  //   return <div>{data.Subject}</div>;
  // };

  // const popupDetail = (activityData) => {
  //
  //   return (
  //     <div className="custom-event-editor">
  //       <p>Activity name : {activityData.Subject}</p>
  //       <p>Location :</p>
  //     </div>
  //   );
  // };

  // const setLocationId = () =>{
  //   const
  //   return
  // }

  //allow to add event to the scheduler
  const onDragStop = (event) => {
    const cellData = myRef.current.getCellDetails(event.target);

    const newEvent = {
      Subject: event.draggedNodeData.text,
      StartTime: cellData.startTime,
      EndTime: cellData.endTime,
      Description: event.draggedNodeData.id,
      IsAllDay: false,
    };

    myRef.current.openEditor(newEvent, "Add", true);
    // setList(
    //   activitiesList.map(
    //     (e) => e.activityLocationId !== event.draggedNodeData.activityLocationId
    //   )
    // );

    setSchedulerEventData((prevState) => {
      const keepExp = prevState.filter((ele) => {
        return ele.activityLocationId !== Number(event.draggedNodeData.id);
      });
      return [...keepExp];
    });
  };

  //exporting Planning to the database
  const scheduleValidation = () => {
    if (myRef.current.eventsData.length === 0) {
      window.alert("Please add activities to your trip before saving");
      return;
    }

    //add verification if user is connected. If not, store url and data in the url
    const newActivityList = myRef.current.eventsData.map((event) => {
      return {
        startDate: event.StartTime,
        endDate: event.EndTime,
        activityLocationId: Number(event.Description),
        name: event.Subject,
      };
    });

    const token = localStorage.getItem("authToken");
    const config = {
      method: "post",
      url: "http://localhost:3003/api/trips/",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        newActivityList,
        cityLocationId: selectedExperience[0].cityLocationId,
        startDate: newActivityList[0].startDate,
        endDate: newActivityList[0].endDate,
        name: "Tirrr",
      },
    };

    axios(config)
      .then(function (response) {
        const trip = response.data.tripCreated._id;
        const tripLink =
          "/users/" + localStorage.getItem("user") + "/trips/" + trip;
        console.log("move");
        navigate(tripLink);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-4/6">
        <div className="flex justify-end">
          <button
            className="bg-[#03666b] p-2 m-2 border-r text-white"
            onClick={readOnly ? scheduleValidation : scheduleValidation}
          >
            {readOnly ? <p>Edit your trip</p> : <p>Save your trip</p>}
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
          eventSettings={data2}
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
              isSelected={focus}
              displayName="All Trip"
              startHour="08:00"
              endHour="24:00"
            ></ViewDirective>
          </ViewsDirective>
          <Inject services={[Day, DragAndDrop, Resize]} />
        </ScheduleComponent>
      </div>
      {!readOnly && (
        <div className="w-2/6 mt-[56px]">
          <p>Activities list </p>
          {data && (
            <TreeViewComponent
              fields={data}
              allowDragAndDrop={true}
              nodeDragStop={onDragStop}
              nodeTemplate={nodeTemplate}
            />
          )}
          {schedulerEventData.length < 1 && (
            <div className="italic text-gray-500 flex flex-col justify-center gap-2">
              {" "}
              <p>No more activities to add</p>
              <button className="bg-[#03666b] p-2 m-2 border-r text-white">
                Add more activities
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Calendar;
