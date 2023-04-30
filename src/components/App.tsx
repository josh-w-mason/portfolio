import logo from './logo.svg'
import './App.css'
import React from 'react'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>The imagination of Joshua Mason.</p>
        </header>
      </div>
    </>
  )
}

export default App
