import logo from './logo.svg'
import joshSketch from './josh-mountain-sketch.svg'
import './App.css'
import React from 'react'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <header className="App-header">
          <img src={joshSketch} className="App-logo" alt="logo" />
          <p>The imagination of Joshua Mason.</p>
        </header>
      </div>
    </>
  )
}

export default App
