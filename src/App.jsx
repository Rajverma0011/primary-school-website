import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary.jsx';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Academics from './pages/Academics.jsx';
import Admissions from './pages/Admissions.jsx';
import Gallery from './pages/Gallery.jsx';
import Careers from './pages/Careers.jsx';

function App() {
  return (
    <ErrorBoundary>
      <div className="main-container">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <main className="main-content">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admissions" element={<Admissions />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}

export default App;
