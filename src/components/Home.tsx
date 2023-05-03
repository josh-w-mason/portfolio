import React from 'react'
import joshSketch from './josh-mountain-sketch.svg'

export default function Home() {
  return (
    <>
      <div id="home" className="App">
        <header className="App-header">
          <img src={joshSketch} className="App-logo inverted" alt="logo" />
          <p>Joshua Mason.</p>
          <br></br>
          <h2>Web Developer | Muso | wanderlust enthusiast</h2>
        </header>
      </div>
    </>
  )
}
