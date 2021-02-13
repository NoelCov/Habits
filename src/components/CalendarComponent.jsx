import React, { useState } from "react";
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function CalendarComponent() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [myTime, setTime] = useState(new Date());

    let day = myTime.getDate();
    let month = myTime.getMonth();
    let myMonth = months[month];
    let year = myTime.getFullYear();
    
  return (
    <div className="calendar-container" >
      {/* <ArrowBackIcon onClick={handleBackwards} className="calendar-icon" style={{ fontSize: 30}} /> */}
      <h1>{myMonth}  {day} / {year}</h1>
      {/* <ArrowForwardIcon onClick={handleForward} className="calendar-icon" style={{ fontSize: 30}} /> */}
    </div>)
}

export default CalendarComponent;
