import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import HabitsContainer from "./HabitsContainer";
import CalendarComponent from "./CalendarComponent";
import { useAuth } from "../Contexts/AuthContext";
const axios = require("axios");

export default function GetStarted(){
  const [habit, setHabit] = useState("");
  const { currentUser } = useAuth();

  function handleChange(event){
    setHabit(event.target.value);
    event.preventDefault();
  }

  function handleClick(e){
    axios.post("/habits", {
      habit: habit,
      email: currentUser.email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    setHabit("");
    e.preventDefault();

    window.location.reload()
  }

  return (
      <div className="getStarted-container">
        <h1 className="title">Welcome!</h1>
        <CalendarComponent />
        <form className="row g-3">
        <div className="col-auto">
          <TextField onChange={handleChange} required id="outlined-basic" size="small" label="Enter your habit" value={habit} autoComplete="off"/>
        </div>
        <div className="col-auto">
          <button onClick={handleClick} type="submit" className="btn getStarted-btn btn-outline-dark">Add</button>
        </div>
        </form>
        <HabitsContainer />
      </div>)
    }
