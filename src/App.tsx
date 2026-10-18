import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { parseHash, useHash } from './hooks/useHashRoute';

export function App() {
  // The page shown is driven by the address hash (e.g. #about, #services/technology),
  // so any link on the site can open a page and the browser back button works
  const hash = useHash();
  const { page, anchor } = parseHash(hash);
  const previousPage = useRef(page);

  useEffect(() => {
    const pageChanged = previousPage.current !== page;
    previousPage.current = page;

    // Wait for the new page to render, then scroll to the requested section (or the top)
    const frame = requestAnimationFrame(() => {
      const target = anchor && anchor !== 'home' ? document.getElementById(anchor) : null;
      if (target) target.scrollIntoView({ behavior: pageChanged ? 'auto' : 'smooth' });
      else if (pageChanged || anchor === 'home') window.scrollTo({ top: 0, behavior: pageChanged ? 'auto' : 'smooth' });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, page, anchor]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bar with the Services dropdown */}
      <Navbar brandName="Vollink" />

      <main className="flex-grow">
        {/* Render Home Page by default */}
        {page === 'home' && <Home />}

        {/* Render About Page when 'About' is clicked */}
        {page === 'about' && (
          <section className="py-10">
            <AboutUs />
          </section>
        )}

        {/* Services pages, opened from the Services dropdown */}
        {(page === 'print-design' || page === 'technology') && <ServicesPage key={page} categoryId={page} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
