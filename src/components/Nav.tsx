import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../public/'
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <a href="https://github.com/josh-w-mason"><img src="../../public" </a>
        </li>
      </ul>
    </nav>
  )
}
