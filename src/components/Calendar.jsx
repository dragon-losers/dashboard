import React, { useState, useEffect } from "react";
import { Paper, makeStyles } from "@material-ui/core";

const Calendar = (props) => {
  const [randEvent, setRandEvent] = useState({});
  const day = new Date(Date.now()).getDate();
  const month = new Date(Date.now()).getMonth();

  useEffect(() => {
    fetch(`https://byabbe.se/on-this-day/${month + 1}/${day}/events.json`)
      .then((res) => res.json())
      .then((date) =>
        setRandEvent(
          date.events[Math.floor(Math.random() * date.events.length)]
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="calendar">
      <Paper className="date">
        <div>
          <h2 className="month">{months[month]}</h2>
          <h1 className="day">{day}</h1>
        </div>
      </Paper>
      <br />
      <Paper>
        <div className="onThisDay">
          <h4>On this day in {randEvent.year}:</h4>
          <p>{randEvent.description}</p>
        </div>
      </Paper>
    </div>
  );
};

export default Calendar;
