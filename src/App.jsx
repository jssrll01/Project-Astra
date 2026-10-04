import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Splash from './components/Splash';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';
import Collection from './pages/Collection';
import Bookmarks from './pages/Bookmarks';
import AIMusic from './pages/AIMusic';
import PromptMusic from './pages/PromptMusic';
import PromptImage from './pages/PromptImage';
import PromptProgramming from './pages/PromptProgramming';
import Journey from './pages/Journey';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import AIMusicDetail from './pages/AIMusicDetail';
import CodePlayground from './pages/CodePlayground';
import PersonalVault from './pages/PersonalVault';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function RoutesView() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="route-fade">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<ProjectGallery />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/ai-music" element={<AIMusic />} />
          <Route path="/ai-music/:slug" element={<AIMusicDetail />} />
        <Route path="/prompt-music" element={<PromptMusic />} />
        <Route path="/prompt-image" element={<PromptImage />} />
        <Route path="/prompt-programming" element={<PromptProgramming />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/playground" element={<CodePlayground />} />
        <Route path="/vault" element={<PersonalVault />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Splash />
      <Background />
      <ScrollProgress />
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main><RoutesView /></main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
