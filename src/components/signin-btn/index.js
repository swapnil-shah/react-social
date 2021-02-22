import React, { useState, useContext } from 'react'
import { signInWithGoogle } from '../../services/auth'
import './style.css'
import { UserContext } from '../../contexts/UserContextProvider'


function SignInBtn() {
  const [user, setUser] = useContext(UserContext).user

  const handleSignInClick = async () => {
    let userBySignIn = await signInWithGoogle()
    userBySignIn && setUser(userBySignIn)
    console.log(userBySignIn)
  }

  return (
    <div className="signInBtn" onClick={handleSignInClick}>
      <p>Sign In with Google</p>
    </div>
  )
}

export default SignInBtn
