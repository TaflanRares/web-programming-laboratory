import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profilePicture from './assets/RaresPFP.jpeg'
import './App.css'

import Card from './components/Card.jsx';

function App() {
  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Taflan Rareș</h1>
        <h1>Computer Engineering Student</h1>
      </header>
      <main>
        <section id="about">
          <img className="profile-image" src={profilePicture} alt="Taflan Rareș" width="200" loading="lazy" />
          <h3 id="greeting"></h3>
          <h2>About Me</h2>
          <div className="section-content section-collapsable">
            <p>
              I am in my 2nd year studying at Transilvania University of Brașov.<br />
              My main interests are embedded systems, systems programming and computer architecture.<br />
            </p>
          </div>
        </section>
        <section id="education">
          <h2>Education</h2>
          <div className="section-collapsable">
            <ol>
              <li>
                Transilvania University of Brașov<br />
                Bachelor's in Computer Engineering | 2024 - Present<br />
                Psychopedagogic Module Level 1 | 2024 - Present
              </li>
              <li>
                Colegiul Național "Radu Negru" Făgăraș | 2020 - 2024<br />
                Mathematics and Computer Science, English Intensive<br />
              </li>
            </ol>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="section-collapsable">
            <ul id="projects-list">
              <Card title="Proiect 1" description="Pagina personala cu HTML si CSS" />
              <Card title="Proiect 2" description="Pagina interactiva cu JavaScript" />
              <Card title="Proiect 3" description="Dashboard cu React" />
            </ul>
          </div>
        </section>
      </main>
      <footer id="contact">
        <h2>Contact</h2>
        <div className="section-collapsable">
          <ul>
            <li>
              Email:
              <a href="mailto:rarestaflan25@gmail.com">
                rarestaflan25@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:
              <a href="https://www.linkedin.com/in/rarestaflan/">
                Taflan Rareș
              </a>
            </li>
            <li>
              GitHub:
              <a href="https://github.com/TaflanRares">
                TaflanRares
              </a>
            </li>
          </ul>
        </div>
        <p style={{ textAlign: 'center' }}>&copy; 2026 Taflan Rareș. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App
