import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from 'react-emoji-render'
import joshSketch from './josh-mountain-sketch.svg'

export default function Home() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={joshSketch} className="App-logo inverted" alt="logo" />
          <p>The imagination of Joshua Mason.</p>
          <br></br>
          <h2>Web Developer | Muso | Wanderlust for New Ideas</h2>
        </header>
      </div>
    </>
  )
}
