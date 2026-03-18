import profilePicture from './assets/RaresPFP.jpeg'
import './App.css'

import Card from './components/Card.jsx';
import Clicker from './components/Clicker.jsx';
import ToDoList from './components/ToDoList.jsx';
import Clock from './components/Clock.jsx';
import ContactForm from './components/ContactForm.jsx';

const projects = [
  { title: "Portfolio page", description: "Personal portfolio page with React" },
  { title: "VR Circuits", description: "Virtual reality educational circuits simulation" },
  { title: "Lingua Astra", description: "Unreal Engine retro-inspired puzzle game" },
];

function App() {
  return (
    <>
      <header className="site-header">
        <div className="header-clock-wrap">
          <Clock />
        </div>
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
          <ToDoList/>
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
              {projects.map((project, index) => (
                <Card key={index} title={project.title} description={project.description} />
              ))}
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
          <ContactForm />
        </div>
        <br/>

        <section id="clicker">
          <h1>Taflan Clicker</h1>
          <Clicker />
        </section>

        <br/>
        <p style={{ textAlign: 'center' }}>&copy; 2026 Taflan Rareș. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App
