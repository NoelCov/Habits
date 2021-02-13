import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HabitsContainer from "./HabitsContainer";
import DoneIcon from '@material-ui/icons/Done';
import CalendarComponent from "./CalendarComponent";
import Footer from "./Footer";
const axios = require("axios");

function GetStarted(){
  const [habit, setHabit] = useState("");
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  const [date] = useState(new Date().toLocaleDateString(undefined, options));

  function handleChange(event){
    setHabit(event.target.value);
    event.preventDefault();
  }

  function handleClick(event){
    axios.post("/habits", {
      habit: habit,
      date: [date]
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    setHabit("");
    event.preventDefault();

    window.location.reload()
  }

  return (
    <div>
      <div className="getStarted-container">
        <CalendarComponent />
        <form>
          <div className="form-btn" onChange={handleChange}>
            <TextField required id="outlined-basic" size="small" label="ENTER YOUR HABIT" value={habit} variant="outlined" autoComplete="off"/>
          </div>
          <div className="form-btn-submit" >
            <Button onClick={handleClick} variant="outlined" size="large"><DoneIcon /></Button>
          </div>
        </form>
        <HabitsContainer />
      </div>
      <Footer />
    </div>)
    }

export default GetStarted;