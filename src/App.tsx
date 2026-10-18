import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';

// Example Home Component (Replace or keep your landing page content here)


export function App() {
  // State to track the active view/page ('home' is set as the default initial view)
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services' | 'contact'>('home');

  // Custom link click handler to switch views seamlessly
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#about') {
      e.preventDefault();
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '#' || href === '#home') {
      e.preventDefault();
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '#services') {
      e.preventDefault();
      setCurrentView('home'); // or switch to a services view if you have one
      // scroll to services section if on home
    }
  };

  // Pass custom links with click handlers to the Navbar
  const customLinks = [
    { name: 'Home', href: '#', onClick: (e: any) => handleNavClick(e, '#') },
    { name: 'Services', href: '#services', onClick: (e: any) => handleNavClick(e, '#services') },
    { name: 'About', href: '#about', onClick: (e: any) => handleNavClick(e, '#about') },
    { name: 'Contact', href: '#contact', onClick: (e: any) => handleNavClick(e, '#contact') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar with view-switching links */}
      <Navbar brandName="Vollink" links={customLinks} />

      <main className="flex-grow">
        {/* Render Home Page by default */}
        {currentView === 'home' && <Home />}

        {/* Render About Page when 'About' is clicked */}
        {currentView === 'about' && (
          <section className="py-10">
            <AboutUs />
          </section>
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;