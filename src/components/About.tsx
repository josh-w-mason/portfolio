import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="about">
        <h3>About</h3>
        <p>
          Welcome, friend, to my little corner of the internet where I get to
          show off some of the things I’ve done. Neat right?<br></br>
          <br></br>
          I’m a full stack developer who likes exploring and playing with
          problems. Through FreeCodeCamp and Dev Academy Aotearoa I’ve worked
          with many bits of tech including HTML, CSS, Javascript, Typescript,
          Knex.js, Node.js, Express.js, React & Redux.<br></br>
          <br></br> Outside of web tech, I’m passionate about music tech and
          have composed on Cubase for many years. You can listen to my
          electronic music project ‘Umbria’ on{' '}
          <a
            href="https://open.spotify.com/artist/2ADouHvtFd7r7Gl32W5Puq?si=173c799dd80e465a"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify.
          </a>
          <br></br>
          <br></br>I love philosophy and psychology, too - what makes people
          tick and working out how best for us all to spend this brief time on
          this planet together seems pretty important to me.
          <br></br> <br></br>
          If you you want more detailed information on my work history, you can
          download my CV{' '}
          <a href="../josh-mason-cv-general-dev-23.pdf" download>
            here
          </a>
          .
        </p>
      </div>
    </>
  )
}
