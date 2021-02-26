import React from 'react'
import { useAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

export default function Header() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  function handleClick() {
    logout();
    history.push('/')
  }

  return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="nav-link active home" href="/"><HomeIcon /></a>
            <a className="nav-link logInOut" onClick={handleClick} >{ currentUser && "Log out - " + currentUser.email}</a>
        </div>
      </nav>
  )
}
