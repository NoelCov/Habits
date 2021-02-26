import React from "react";
import Home from "./home";
import Header from "./Header";
import Register from "./Register";
import LogIn from "./LogIn";
import PrivateRoute from "./PrivateRoute";
import getStarted from "./getStarted";
import Footer from "./Footer";
import { AuthProvider } from "../Contexts/AuthContext"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function Routes(){
  return (
    <AuthProvider>
    <Router>
    <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={LogIn} />
          <PrivateRoute path="/getStarted" component={getStarted} />
      </Switch>
      <Footer />
    </Router>
    </AuthProvider>
  )
};
