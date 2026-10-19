import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { ContactPage as Contact } from './pages/Contacts';
import { Home } from './pages/Home';

export function App() {
  // State to track the active view/page ('home' is set as default)
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services' | 'contact'>('home');

  // Custom link click handler to switch views seamlessly
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#about') {
      setCurrentView('about');
    } else if (href === '#contact') {
      setCurrentView('contact');
    } else if (href === '#' || href === '#home') {
      setCurrentView('home');
    } else if (href === '#services') {
      setCurrentView('home'); // or switch to a dedicated services view
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom links with click handlers passed to Navbar
  const customLinks = [
    { name: 'Home', href: '#', onClick: (e: any) => handleNavClick(e, '#') },
    { name: 'Services', href: '#services', onClick: (e: any) => handleNavClick(e, '#services') },
    { name: 'About', href: '#about', onClick: (e: any) => handleNavClick(e, '#about') },
    { name: 'Contact', href: '#contact', onClick: (e: any) => handleNavClick(e, '#contact') },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navigation Bar */}
      <Navbar brandName="Vollink" links={customLinks} />

      <main className="flex-grow">
        {/* Render Home Page */}
        {currentView === 'home' && <Home />}

        {/* Render About Page */}
        {currentView === 'about' && <AboutUs /> }

        {/* Render Contact Page */}
        {currentView === 'contact' && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

export default App;