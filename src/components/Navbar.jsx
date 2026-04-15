import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

    useEffect(() => {
            document.body.classList.toggle ('dark-mode', isDarkMode);
            window.localStorage.setItem (THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
        }, [isDarkMode]);
        
          function handleThemeToggle() {
            setIsDarkMode((currentTheme) => !currentTheme);
        }

    return (
        <nav>
            <ul className="navbar">
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/projects">Proiecte</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <button
                    type="button"
                    className="theme-toggle-button"
                    onClick={handleThemeToggle}
                    aria-pressed={isDarkMode}
                >
                    {isDarkMode ? 'Light mode' : 'Dark mode'}
                </button>
            </ul>
        </nav>
    );
}

export default Navbar;