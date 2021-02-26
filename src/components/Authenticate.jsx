import React, { useRef, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function Authenticate() {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()
 
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/getStarted");
    } catch(error) {
      console.log(error.code)
      console.log(error.message)
      setError("Failed to sign in")
    }

    setLoading(false);
  }

  console.log(emailRef.current.value, passwordRef.current.value)

  return (
    <div className="authenticate-container">
    <h1 className="title">Sign In</h1>
      {error && <h1 style={{backgroundColor: "yellow", width: "50%", margin: "20px auto"}}>{error}</h1>}
      <form onSubmit={handleSubmit} className="row g-3"> 
        <div className="col-auto">
          <input type="email" className="form-control" id="email" ref={emailRef} placeholder="Email" required></input>
        </div>
        <div className="col-auto">
          <input type="password" className="form-control" id="password" ref={passwordRef} placeholder="Password" required></input>
        </div>
        <div className="col-auto">
          <button disabled={loading} type="submit" className="btn btn-outline-dark">Sign In</button>
        </div>
      </form>
      <p style={{fontSize: "20px", margin: "10px 0"}}>Not registered? <Link to="/Register" className="link">Create account</Link></p>
      
    </div>
  )
}

