
import { useState } from "react";
import "./App.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="brand" aria-label="V-Link home">
      <svg
        className="brand-symbol"
        viewBox="0 0 72 72"
        aria-hidden="true"
      >
        <path
          d="M5 7 H27 L43 36 L29 60 Z"
          fill="#3C319F"
        />
        <path
          d="M39 8 H59 L40 37 L29 19 Z"
          fill="#3C319F"
        />
        <circle cx="59" cy="9" r="8" fill="#F60400" />
        <rect x="45" y="49" width="9" height="9" rx="1.5" fill="#00A5D8" />
        <rect x="57" y="49" width="9" height="9" rx="1.5" fill="#00A5D8" />
        <rect x="45" y="61" width="9" height="9" rx="1.5" fill="#00A5D8" />
      </svg>
      <span>V-Link</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-wrapper">
      <header className="navbar">
        <div className="nav-container">
          <Logo />

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="main-navigation"
            className={`nav-menu ${menuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={link.label === "Home" ? "active" : ""}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="get-started"
              onClick={closeMenu}
            >
              Get Started <span aria-hidden="true">⟶</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-decoration circle-top" />
          <div className="hero-decoration circle-bottom" />

          <span className="square square-one" />
          <span className="square square-two" />
          <span className="square square-three" />
          <span className="square square-four" />
          <span className="square square-five" />
          <span className="square square-six" />

          <div className="hero-content">
            <p className="eyebrow">THINK. CREATE. CONNECT.</p>
            <h1>
              Ideas into <span>impact.</span>
            </h1>
            <div className="hero-underline" />
            <p className="hero-description">
              Turning bold ideas into meaningful digital experiences.
              Let's build something great together.
            </p>
            <a href="#about" className="hero-link">
              Discover more <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="info-section" id="about">
          <span className="section-tag">01 / ABOUT</span>
          <h2>Good ideas deserve great execution.</h2>
          <p>
            We believe in creativity, collaboration and turning ideas
            into real-world impact.
          </p>
        </section>

        <section className="info-section alternate" id="services">
          <span className="section-tag">02 / SERVICES</span>
          <h2>What we do</h2>
          <p>
            Explore our services and discover new possibilities.
          </p>
        </section>

        <section className="info-section" id="projects">
          <span className="section-tag">03 / PROJECTS</span>
          <h2>Ideas brought to life.</h2>
          <p>Every great project starts with a conversation.</p>
        </section>

        <section className="info-section alternate" id="contact">
          <span className="section-tag">04 / CONTACT</span>
          <h2>Let's create something amazing.</h2>
          <a className="get-started contact-button" href="mailto:hello@v-link.com">
            Get in touch <span aria-hidden="true">⟶</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <Logo />
        <p>© {new Date().getFullYear()} V-Link. Built with purpose.</p>
      </footer>
    </div>
  );
}

export default App;
