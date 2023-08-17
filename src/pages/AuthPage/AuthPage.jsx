import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from "react";

export default function AuthPage({setUser}) {
  const [showForm, setShowForm] = useState(true)
  

  return (
    <> 
    <main>
      <div>MERN - APP</div>
      <button className="not-btn" onClick={() => setShowForm(!showForm)} >
        {showForm ? "SIGN UP" : "SIGN IN"}
        </button>
      { showForm ? <SignUpForm  setUser={setUser} /> :  <LoginForm  setUser={setUser} /> }
    <div>AuthPage</div>
    </main>
    </>
  )
}
