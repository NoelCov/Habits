import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";


export default function CreateAccount() {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const passwordConfirmRef = useRef('')
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault()
 
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords do not match");
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch(error) {
      console.log(error.code)
      console.log(error.message)
      setError("Failed to create an account")
    }

    setLoading(false);
  }

  console.log(emailRef.current.value);

  return (
    <div className="authenticate-container">
    <h1 className="title">Please register</h1>
    {error && <h1 style={{backgroundColor: "yellow", width: "50%", margin: "20px auto"}}>{error}</h1>}
      <form className="row g-3" onSubmit={handleSubmit}> 
        <div className="col-auto">
          <input type="email" className="form-control" id="email" ref={emailRef} placeholder="Email" required></input>
        </div>
        <div className="col-auto">
          <input type="password" className="form-control" id="password" ref={passwordRef} placeholder="Password" required></input>
        </div>
        <div className="col-auto">
          <input type="password" className="form-control" id="confirmPassword" ref={passwordConfirmRef} placeholder="Confirm password" required></input>
        </div>
        <div className="col-auto">
          <button disabled={loading} type="submit" class="btn btn-outline-dark">Sign Up</button>
        </div>
      </form>
      <p style={{fontSize: "20px", margin: "10px 0"}}>Already have an account? <Link to="/Login" className="link">Sign in</Link></p>
    </div>
  )
}
