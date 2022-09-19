import React, { useRef } from "react";
import "./material.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  ViewsDirective,
  ViewDirective,
  DragAndDrop,
  Resize,
  CellClickEventArgs,
} from "@syncfusion/ej2-react-schedule";

import { appointments } from "./data-test";

import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";

const Calendar = () => {
  const myRef = useRef();
  const dataTest = [
    {
      Id: 3000,
      Subject: "Test 2",
    },
    {
      Id: 3001,
      Subject: "Test 2",
    },
  ];
  const field = { dataSource: dataTest, id: "Id", text: "Subject" };

  const dataSource = appointments.map(
    ({ title, startDate, endDate }, index) => {
      return {
        Id: index,
        Subject: title,
        StartTime: startDate,
        EndTime: endDate,
        IsAllDay: false,
        Status: "Completed",
        Priority: "High",
      };
    }
  );
  const onDragStart = (drag) => {
    drag.navigation.enable = true;
    drag.navigation.timeDelay = 1000;
  };

  const onDragStop = (event) => {
    const cellData = myRef.current.getCellDetails(event.target);
    const newEvent = {
      Subject: event.draggedNodeData.text,
      StartTime: cellData.startTime,
      EndTime: cellData.endTime,
      IsAllDay: false,
    };

    myRef.current.openEditor(newEvent, "Add", true);
  };

  return (
    <>
      <div className="w-4/6">
        <ScheduleComponent
          selectedDate={new Date(2018, 5, 25)}
          eventSettings={{ dataSource }}
          workHours={{
            highlight: true,
            start: "7:00",
            end: "24:00",
          }}
          ref={myRef}
          dragStart={onDragStart}
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
              isSelected={true}
              displayName="All Trip"
              startHour="08:00"
              endHour="24:00"
            ></ViewDirective>
          </ViewsDirective>
          <Inject services={[Day, DragAndDrop, Resize]} />
        </ScheduleComponent>
      </div>
      <div className="w-2/6">
        <p>Activities list </p>
        <TreeViewComponent
          fields={field}
          allowDragAndDrop={true}
          nodeDragStop={onDragStop}
        />
        {/* {dataTest.map((e) => {
          return <div className="h-250 bg-slate-500 border">{e.Subject}</div>;
        })} */}
      </div>
    </>
  );
};

export default Calendar;
