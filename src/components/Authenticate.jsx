import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


export default function Authenticate() {
  return (
    <div className="authenticate-container">
    <h1 className="title">Enter your credentials</h1>
      <form className="row g-3"> 
        <div className="col-auto">
          <input type="email" className="form-control" id="email" placeholder="Email" required></input>
        </div>
        <div className="col-auto">
          <input type="password" className="form-control" id="password" placeholder="Password" required></input>
        </div>
        <div className="col-auto">
          <button type="submit" class="btn btn-outline-dark">Sign In</button>
        </div>
      </form>
      <p style={{fontSize: "20px", margin: "10px 0"}}>Not registered? <Link to="/Register" className="link">Create account</Link></p>
      
    </div>
  )
}

