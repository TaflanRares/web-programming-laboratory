import { useEffect, useState } from 'react';
import profilePicture from '../assets/RaresPFP.jpeg'
import '../App.css'
import Clock from '../components/Clock.jsx';

const THEME_STORAGE_KEY = 'theme-preference';

function getInitialDarkMode() {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === 'dark') {
        return true;
    }

    if (storedTheme === 'light') {
        return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function Home() {
    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);
    
    useEffect(() => {
        document.body.classList.toggle ('dark-mode', isDarkMode);
        window.localStorage.setItem (THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);
    
      function handleThemeToggle() {
        setIsDarkMode((currentTheme) => !currentTheme);
    }

    return (
        <div>
        <header className="site-header">
        <div className="header-clock-wrap">
          <Clock />
        </div>
        <button
          type="button"
          className="theme-toggle-button"
          onClick={handleThemeToggle}
          aria-pressed={isDarkMode}
        >
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </button>
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
        </main>
        <footer className="site-footer">
          <p>&copy; 2023 Taflan Rareș. All rights reserved.</p>
        </footer>
      </div>    
    );
}
export default Home;