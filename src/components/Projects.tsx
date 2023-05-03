import React from 'react'
import { Link } from 'react-router-dom'
import buddyPic from '../screenshots/buddy-screenshot.png'

const projects = [
  {
    title: 'Buddy',
    description:
      'This project was our final group project we worked on at Dev Academy, the concept of which was to create something that would help international travellers connect with local Welligtonians who wanted to help introduce them to the local culture and make friends.',
    reflections:
      'There were unique challenges presented by adding new things like authorisation to the tech stack, as well navigating a large group of six diverse individuals. We had to full advantage of tools like a digital kanban board and stand ups. I had my own personal challenges around wellbeing I had to juggle on top of these also.',
    tech: [
      'Auth0',
      'React',
      'Redux',
      'Typescript',
      'Material UI',
      'Knex',
      'SCSS',
    ],
    deployedLink: '',
    gitHubLink: 'https://github.com/josh-w-mason/buddy',
    screenshot: buddyPic,
  },

  // {title:
  //   description:
  // reflections:
  // tech:
  // deployedLink:
  // gitHubLink:
  // screenshot: },

  // {title:
  //   description:
  // reflections:
  // tech:
  // deployedLink:
  // gitHubLink:
  // screenshot: }
]

export default function Projects() {
  return (
    <>
      <div id="projects" className="project">
        <img
          src={projects[0].screenshot}
          alt="Screenshot of the homepage for buddy"
        ></img>
        <div id="buddy" className="project-info">
          <header>
            <h2>Project title: {projects[0].title}</h2>
          </header>
          <p>{projects[0].description}</p>
          <p>{projects[0].reflections}</p>
          <ul className="nav-list">
            Tech used:{' '}
            {projects[0].tech.map((i, ind) => (
              <li key={ind}>{i}</li>
            ))}
          </ul>
          <p>
            <a
              className="no-underline"
              href={projects[0].gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github.
            </a>
          </p>
        </div>
      </div>
      <div className="section-divider"></div>
    </>
  )
}
