import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({setUser}) {
  return (
    <> 
    <main>
    <div>AuthPage</div>
    <SignUpForm setUser={setUser} />
    </main>
    </>
  )
}
