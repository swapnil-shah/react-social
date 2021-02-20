import React from 'react'
import './style.css'
import { SignInBtn } from '../../components'

function Navbar() {
  return (
    <div className="navbar">
      <h3>ReactSocial</h3>
      <SignInBtn />
    </div>
  )
}

export default Navbar
