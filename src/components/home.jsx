import React from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "../Contexts/AuthContext";

function HomePage() {
  const { currentUser } = useAuth();
  const history = useHistory();

  function handleClick() {
    if (currentUser){
      history.push('/getStarted');
    } else {
      history.push('/Login')
    }
  }

  return (
  <div className="container">
  <h1 className="title">Habit Tracker</h1>
    <div className="btn">
        <Button onClick={handleClick} variant="contained">Get Started</Button>
    </div>
  <div className="quote"><i>"Successful people are simply those with successful habits"</i></div>
  <Footer />
</div>)
};

export default HomePage;