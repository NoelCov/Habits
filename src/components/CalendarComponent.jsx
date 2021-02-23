import React, { useState } from "react";

function CalendarComponent() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [myTime] = useState(new Date());

    let day = myTime.getDate();
    let month = myTime.getMonth();
    let myMonth = months[month];
    let year = myTime.getFullYear();
    
  return (
    <div className="calendar-container" >
      <h1 className="calendar-string">{myMonth}  {day} / {year}</h1>
    </div>)
}

export default CalendarComponent;
