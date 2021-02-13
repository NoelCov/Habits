import React from "react";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Footer from "./Footer";

function homePage() {
  return (
  <div className="container">
  <h1 className="title">Habit Tracker</h1>
    <div className="btn">
      <Link style={{ textDecoration: 'none' }} to="/getStarted">
        <Button variant="contained">Get Started</Button>
      </Link>
    </div>
  <div className="quote"><i>"Successful people are simply those with successful habits"</i></div>
  <Footer />
</div>)
};

export default homePage;