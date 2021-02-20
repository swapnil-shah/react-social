import React from 'react'
import { SignInBtn } from '../../components'
import './style.css'
function CreatePost() {
  return (
    <div className="createPost">
      <SignInBtn />
      <p style={{ marginLeft: "12px" }}>to Post and Comment</p>
    </div>
  )
}

export default CreatePost
