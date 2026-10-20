import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { ContactPage as Contact } from './pages/Contacts';
import { Home } from './pages/Home';
import { parseHash, useHash } from './hooks/useHashRoute';

export function App() {
  // Driven by address hash (e.g., #about, #print-design, #contact)
  const hash = useHash();
  const { page, anchor } = parseHash(hash);
  const previousPage = useRef(page);

  useEffect(() => {
    const pageChanged = previousPage.current !== page;
    previousPage.current = page;

    // Wait for the page to render, then scroll to the requested section or top
    const frame = requestAnimationFrame(() => {
      const target = anchor && anchor !== 'home' ? document.getElementById(anchor) : null;
      if (target) {
        target.scrollIntoView({ behavior: pageChanged ? 'auto' : 'smooth' });
      } else if (pageChanged || anchor === 'home') {
        window.scrollTo({ top: 0, behavior: pageChanged ? 'auto' : 'smooth' });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, page, anchor]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-slate-900">
      {/* Navigation Bar */}
      <Navbar brandName="Vollink" />

      <main className="flex-grow">
        {/* Render Home Page by default */}
        {(page === 'home' || !page) && <Home />}

        {/* Render About Page */}
        {page === 'about' && (
            <AboutUs />
        )}

        {/* Render Contact Page */}
        {page === 'contact' && (
            <Contact />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;