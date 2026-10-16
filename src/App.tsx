import React from 'react';
import { Navbar } from './components/Navbar';
import { AboutUs } from './pages/AboutUs';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <Navbar brandName="Vollink" />

      {/* About Us Section / Page */}
      <main className="flex-grow">
        <AboutUs />
      </main>
    </div>
  );
}

export default App;