import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`${isHome ? 'bg-[#08121a] py-0' : 'bg-[#f3f4f6] py-6'} text-[#000000] min-h-screen relative antialiased selection:bg-[#505050] selection:text-[#FFFFFF]`}>
      {!isHome && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {!isHome && <Footer />}
    </div>
  );
}

export default App;
