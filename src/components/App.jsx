import { Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react'
import Nav from './Nav'
import About from './About'
import Home from './Home'
import Projects from './Projects'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
