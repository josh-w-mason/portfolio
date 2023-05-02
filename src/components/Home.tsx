import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from 'react-emoji-render'
import joshSketch from './josh-mountain-sketch.svg'

export default function Home() {
  return (
    <>
      <div id="home" className="App">
        <header className="App-header">
          <img src={joshSketch} className="App-logo inverted" alt="logo" />
          <p>The imagination of Joshua Mason.</p>
          <br></br>
          <h2>Web Developer | Muso | disciple of wanderlust</h2>
        </header>
      </div>
    </>
  )
}
