import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Academics from './pages/Academics.jsx';
import Admissions from './pages/Admissions.jsx';

function App() {
  return (
    <div className="main-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
