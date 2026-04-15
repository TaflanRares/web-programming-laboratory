import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css'

import Clock from './components/Clock.jsx';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  function handleThemeToggle() {
    setIsDarkMode((currentTheme) => !currentTheme);
  }

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
