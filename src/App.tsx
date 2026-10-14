import React from 'react';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Include the navigation bar */}
      <Navbar brandName="Vollink" />

      {/* Page Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Welcome to Vollink Website
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your Tailwind CSS and TypeScript project is ready to go.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;