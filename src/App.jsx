import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css'

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/contact" element={<Contact />} />
          <Route path = "*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App
