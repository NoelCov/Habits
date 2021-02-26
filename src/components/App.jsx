import React from "react";
import Home from "./home";
import Header from "./Header";
import CreateAccount from "./CreateAccount";
import Authenticate from "./Authenticate";
import GetStarted from "./getStarted";
import Footer from "./Footer";
import { AuthProvider } from "../Contexts/AuthContext"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(){
  return (
    <AuthProvider>
    <Router>
    <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Register" component={CreateAccount} />
          <Route path="/Login" component={Authenticate} />
          <Route exact path="/getstarted" component={GetStarted} />
      </Switch>
      <Footer />
    </Router>
    </AuthProvider>
  )
};

export default App;
