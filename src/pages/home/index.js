import React from 'react'
import './style.css'
import { CreatePost, Navbar } from '../../container'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <CreatePost />
    </div>
  )
}

export default Home
