import React, { useEffect } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    // Create cosmic background
    const cosmicBg = document.createElement('div');
    cosmicBg.className = 'cosmic-bg';
    
    // Create stars container
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    // Generate random stars
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;
      starsContainer.appendChild(star);
    }
    
    // Create nebula clouds
    const nebulas = [
      { color: 'rgba(138, 43, 226, 0.4)', size: '400px', left: '10%', top: '20%' },
      { color: 'rgba(75, 0, 130, 0.3)', size: '500px', left: '70%', top: '10%' },
      { color: 'rgba(184, 9, 195, 0.3)', size: '450px', left: '50%', top: '60%' },
      { color: 'rgba(59, 172, 226, 0.2)', size: '350px', left: '20%', top: '70%' },
      { color: 'rgba(147, 51, 234, 0.3)', size: '400px', left: '80%', top: '50%' },
    ];
    
    nebulas.forEach((nebula, index) => {
      const nebulaEl = document.createElement('div');
      nebulaEl.className = 'nebula';
      nebulaEl.style.background = nebula.color;
      nebulaEl.style.width = nebula.size;
      nebulaEl.style.height = nebula.size;
      nebulaEl.style.left = nebula.left;
      nebulaEl.style.top = nebula.top;
      nebulaEl.style.animationDelay = `${index * 1.5}s`;
      nebulaEl.style.animationDuration = `${8 + index * 2}s`;
      starsContainer.appendChild(nebulaEl);
    });
    
    // Create shooting stars
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = `${Math.random() * 50}%`;
      shootingStar.style.top = `${Math.random() * 50}%`;
      shootingStar.style.animationDuration = `${1 + Math.random() * 2}s`;
      starsContainer.appendChild(shootingStar);
      
      setTimeout(() => {
        shootingStar.remove();
      }, 3000);
    };
    
    // Create shooting stars periodically
    const shootingStarInterval = setInterval(createShootingStar, 3000);
    
    cosmicBg.appendChild(starsContainer);
    document.body.insertBefore(cosmicBg, document.body.firstChild);
    
    // Cleanup
    return () => {
      clearInterval(shootingStarInterval);
      cosmicBg.remove();
    };
  }, []);

  return (
    <div className='relative overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
