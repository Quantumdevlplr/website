import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ESummit from './pages/ESummit';
import Events from './pages/Events';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import StartupCommunity from './pages/StartupCommunity';
import Team from './pages/Team';
import JoinUs from './pages/JoinUs';
import StartupCommunityButton from './components/StartupCommunityButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/e-summit" element={<ESummit />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/startup-community" element={<StartupCommunity />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Route>
      </Routes>
      <StartupCommunityButton />
    </Router>
  );
}

export default App