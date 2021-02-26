import React from 'react'
import { useAuth } from "../Contexts/AuthContext";
import { Route, useHistory } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest}) {

  const { currentUser } = useAuth();
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : history.push('/login')
      }}
      />
  )
}
