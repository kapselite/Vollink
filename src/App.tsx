import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { ContactPage as Contact } from './pages/Contacts';
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
