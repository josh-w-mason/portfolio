import React from 'react'
import { Link } from 'react-router-dom'
import linkedinLogo from '../icons/png-transparent-linkedin-icon-linkedin-text-rectangle-logo.png'
import githubLogo from '../icons/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png'

export default function Nav() {
  return (
    <nav>
      <div className="nav Nav-logo nav-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="aboutMe">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>

          <li>
            <a
              href="https://github.com/josh-w-mason"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="github logo"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joshua-walcott-mason"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="Linked In logo"></img>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
