import React from 'react'
import buddyPic from '../screenshots/buddy-screenshot.png'
import fullstackPic from '../screenshots/full-stack-screenshot.png'
import foundationsPic from '../screenshots/josh-foundations-screenshot.png'

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

  {
    title: 'Basic full-stack todo list',
    description:
      'This project was one of our individual assignments where we had to implement the culmination of all of the different pieces of the tech stack we had learned in a basic application demonstrating some CRUD functionality. For mine I choose to make a list of some basic information about festivals I would like to go to one day, with an add form at the bottom.',
    reflections:
      "Getting my head around the complete data flow with the newly added Redux to the stack was definitely tricky at first. I consulted one of my developer friends and we had good discussions to clarify what was happening where. The deployment part of the assessment (we were using Dokku) ended up chewing up way more time than I was expecting. As such I didn't get around to implenting more CRUD features and styling, but this is something I can come back to for practise in the future",
    tech: ['React', 'Redux', 'Typescript', 'Knex'],
    deployedLink: ' ',
    gitHubLink: 'https://github.com/josh-w-mason/full-stack-todo',
    screenshot: fullstackPic,
  },

  {
    title: 'Dev Academy Foundations blog',
    description:
      'During the first five weeks of the Dev Academy course, we got to combine the soft skills practise of writing reflections with our beginner knowledge of HTML and CSS by making a blog.',
    reflections:
      'Ah, where it all began: all the way back in January. Such simpler times. I enjoyed wrestling with the weekly Sprint challenges and the puzzle solving of Javascript katas such as Fizz-Buzz towards the end.',
    tech: ['HTML', 'CSS'],
    deployedLink: 'https://josh-w-mason.github.io/',
    gitHubLink: 'https://github.com/josh-w-mason/josh-w-mason.github.io',
    screenshot: foundationsPic,
  },
]

export default function Projects() {
  return (
    <>
      <div id="projects" className="project">
        <div id="buddy">
          <img
            src={projects[0].screenshot}
            alt="Screenshot of the homepage for buddy"
          ></img>
          <div className="project-info">
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

        <div id="fullStack">
          <img
            src={projects[1].screenshot}
            alt="Screenshot of the homepage for buddy"
          ></img>
          <div className="project-info">
            <header>
              <h2>Project title: {projects[1].title}</h2>
            </header>
            <p>{projects[1].description}</p>
            <p>{projects[1].reflections}</p>
            <ul className="nav-list">
              Tech used:{' '}
              {projects[1].tech.map((i, ind) => (
                <li key={ind}>{i}</li>
              ))}
            </ul>
            <p>
              <a
                className="no-underline"
                href={projects[1].gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github.
              </a>
            </p>
          </div>
        </div>
        <div id="foundations">
          <img
            src={projects[2].screenshot}
            alt="Screenshot of the homepage for buddy"
          ></img>
          <div className="project-info">
            <header>
              <h2>Project title: {projects[2].title}</h2>
            </header>
            <p>{projects[2].description}</p>
            <p>{projects[2].reflections}</p>
            <ul className="nav-list">
              Tech used:{' '}
              {projects[2].tech.map((i, ind) => (
                <li key={ind}>{i}</li>
              ))}
            </ul>
            <p>
              <a
                className="no-underline"
                href={projects[2].gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github.
              </a>
            </p>
            <p>
              <a
                className="no-underline"
                href={projects[2].deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
