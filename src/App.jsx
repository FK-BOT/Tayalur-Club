import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Join from './components/Join';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Activities />
      <Gallery />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
