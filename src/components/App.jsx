import React from "react";
import Home from "./home";
import GetStarted from "./getStarted"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(){
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/GetStarted" component={GetStarted} />
    </Switch>
    </Router>
  )
};

export default App;
