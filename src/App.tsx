import React from 'react';
import { Navbar } from './components/Navbar';
import { AboutUs } from './pages/AboutUs';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <Navbar brandName="Vollink" />

      <main className="flex-grow">
        {/* Home / Landing Page */}
        <Home />

        {/* About Us Section / Page */}
        <section id="about" className="scroll-mt-16">
          <AboutUs />
        </section>
      </main>
    </div>
  );
}

export default App;