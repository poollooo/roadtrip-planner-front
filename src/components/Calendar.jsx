import React, { useContext, useRef, useState } from "react";
import "./material.css";
import "./event.css";
import restIcon from "../images/restaurant-icon.png";
import actIcon from "../images/activities-icon.png";
import axios from "axios";
import { SearchContext } from "../Context/SearchResultContext";
import { ORIGIN } from "../utils/const"

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

const Calendar = ({ tripData, readOnly, focus, startDate, endDate }) => {
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
      ({ activityLocationId, name, category, address, rawRating, photo }) => ({
        id: activityLocationId,
        name,
        category,
        address,
        rawRating,
        photo,
      })
    ),
    id: "id",
    text: "name",
    category: "category",
    address: "address",
    rawRating: "rawRating",
    img: "photo",
  };

  if (readOnly) {
    const data2 = {
      dataSource: tripData.map((activity, index) => ({
        Id: index + 1,
        Subject: activity.activityId.name,
        StartTime: activity.startDate,
        EndTime: activity.endDate,
      })),
    };
    console.log("data2", data2);
  }
  //defining new display for activties list
  const nodeTemplate = (data) => {
    return (
      <div className="flex justify-start items-center gap-2 w-full  text-sm h-[6rem]">
        <img
          src={data.photo[0]}
          alt="temp"
          className="h-full w-[175px] object-cover rounded-lg"
        />
        <div className="flex flex-col content-between">
          <p className="font-medium text-lg">{data.name}</p>

          <span className="">{data.address}</span>
          <span>
            <img
              src={data.category === "restaurant" ? restIcon : actIcon}
              alt="icon"
              className="h-6 minw-6 inline "
            />
          </span>
        </div>
      </div>
    );
  };

  //allow to add event to the scheduler
  const onDragStop = (event) => {
    const cellData = myRef.current.getCellDetails(event.target);
    console.log(event.target);
    const newEvent = {
      Subject: event.draggedNodeData.text,
      StartTime: cellData.startTime,
      EndTime: cellData.endTime,
      Description: event.draggedNodeData.id,
      IsAllDay: false,
    };

    myRef.current.openEditor(newEvent, "Add", true);

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
        activityLocationId: event.Description,
        startDate: event.StartTime,
        endDate: event.EndTime,
        name: event.Subject,
      };
    });
    console.log(newActivityList);
    const token = localStorage.getItem("authToken");
    const config = {
      method: "post",
      url: `${ORIGIN}/trips/`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        newActivityList,
        cityLocationId: selectedExperience[0].cityLocationId,
        startDate: newActivityList[0].startDate,
        endDate: newActivityList[0].endDate,
        name: "TirrTrr",
      },
    };

    axios(config)
      .then(function (response) {
        const trip = response.data.tripCreated._id;
        const tripLink =
          "/users/" + localStorage.getItem("user") + "/trips/" + trip;
        console.log(response.data);
        navigate(tripLink);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {!readOnly && (
        <div className="w-2/5 mt-[56px]">
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
              <button className="bg-[#03666b]  border-r text-white">
                Add more activities
              </button>
            </div>
          )}
        </div>
      )}
      <div className="w-[800px]">
        <div className="flex justify-end">
          <button
            className="bg-[#03666b] p-2 m-2 border-r text-white"
            onClick={readOnly ? scheduleValidation : scheduleValidation}
          >
            {readOnly ? <p>Edit your trip</p> : <p>Save your trip</p>}
          </button>
        </div>
        <ScheduleComponent
          height={800}
          workHours={{
            highlight: true,
            start: "7:00",
            end: "23:00",
          }}
          ref={myRef}
          selectedDate={startDate}
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
    </>
  );
};

export default Calendar;
