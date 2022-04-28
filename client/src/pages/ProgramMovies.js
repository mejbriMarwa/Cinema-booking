import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import "date-time-picker-component/dist/css/date-time-picker-component.min.css";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Love Tactics",
    allDay: true,
    start: new Date(2022, 2, 1),
    end: new Date(2022, 2, 1),
  },
  {
    title: "DOWNFALL: The Case Against Boeing",
    start: new Date(2022, 2, 9),
    end: new Date(2022, 2, 9),
  },
  {
    title: "Forgive Us Our Trespasses",
    start: new Date(2022, 2, 17),
    end: new Date(2022, 2, 17),
  },
];

function ProgramMovies() {
  const { isAuth, role } = useSelector((state) => state.user);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent(e) {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="programMovie">
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        className="calender"
        style={{ height: 500, margin: "50px", backgroundColor: "white" }}
      />
      {isAuth && role === "admin" ? (
        <>
          <div className="addProgram">
            <h2>Add New Event</h2>
            <input
              className="inputProg"
              type="text"
              placeholder="Add Title"
              style={{ width: "20%", marginRight: "10px" }}
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <div className="DateProg">
              <DatePicker
                placeholderText="Start Date"
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
            </div>
            <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
              Add Event
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProgramMovies;
