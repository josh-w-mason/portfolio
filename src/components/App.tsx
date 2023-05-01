import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg'
import joshSketch from './josh-mountain-sketch.svg'
import './App.css'
import React from 'react'
import Nav from './Nav'
import About from './About'

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <header className="App-header">
          <img src={joshSketch} className="App-logo inverted" alt="logo" />
          <p>The imagination of Joshua Mason.</p>
          <br></br>
          <h2>
            Web Developer | Muso | Occasional writer, full-time Lol-peddler
          </h2>
        </header>
        <Routes>
          {/* <Route path="/" element={Home} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={Projects} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
