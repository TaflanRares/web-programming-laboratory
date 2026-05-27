import '../App.css'
import '../css/stats.css'

import { useState, useEffect } from 'react';

import profilePicture from '../assets/RaresPFP.jpeg'

import Clock from '../components/Clock.jsx';

function Home() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
        const response = await fetch('https://web-programming-laboratory.onrender.com/api/projects/stats');
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div>
        <header className="site-header">
        <div className="header-clock-wrap">
          <Clock />
        </div>
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
              My main interests are embedded systems and computer architecture.<br />
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
        {stats && (
          <section id="stats">
            <h2>Projects</h2>
              <div className="section-content section-collapsable stats-grid">
                <div className="stat-card">
                  <span className="stat-label">Total Projects</span>
                  <span className="stat-value">{stats.total}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Completed</span>
                  <span className="stat-value">{stats.done}</span>
                </div>
            </div>
          </section>
        )}
        </main>
      </div>    
    );
}
export default Home;