import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Layers, MonitorSmartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import logoImage from '../assets/logo.png'; // Correct default import for image assets
import { categories, categoryHref } from '../data/services';
import { parseHash, useHash } from '../hooks/useHashRoute';

interface NavDropdownItem {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  items: { name: string; href: string }[];
}

interface NavLink {
  name: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; // Added onClick support
  children?: NavDropdownItem[];
}

interface NavbarProps {
  brandName?: string;
  links?: NavLink[];
  logoSrc?: string;
}

const categoryIcons: Record<string, { icon: LucideIcon; gradient: string }> = {
  'print-design': { icon: Layers, gradient: 'from-[#3c319f] to-[#00a5d8]' },
  technology: { icon: MonitorSmartphone, gradient: 'from-[#f60400] to-[#3c319f]' },
};

const serviceMenu: NavDropdownItem[] = categories.map((category) => ({
  name: category.title,
  href: categoryHref(category.id),
  description: category.summary,
  ...categoryIcons[category.id],
  items: category.services.map((service) => ({
    name: service.title,
    href: categoryHref(category.id, service.slug),
  })),
}));

const defaultLinks: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services', children: serviceMenu },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

// Which top-level link matches the page currently showing
const activeLinkName = (hash: string) => {
  const route = parseHash(hash);
  if (route.page === 'about') return 'About';
  if (route.page !== 'home' || route.anchor === 'services') return 'Services';
  if (route.anchor === 'contact') return 'Contact';
  return 'Home';
};

const linkClasses = (isActive: boolean) =>
  `px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-indigo-500/20 relative overflow-hidden group ${
    isActive
      ? 'text-white bg-gradient-to-r from-[#3c319f] to-[#00a5d8]'
      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#3c319f] hover:to-[#00a5d8]'
  }`;

// Services link with a dropdown that opens on hover (mouse) or click (touch and keyboard)
const DesktopDropdown: React.FC<{ link: NavLink; isActive: boolean; index: number }> = ({ link, isActive, index }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const pointerType = useRef('');

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  // Short delay so the menu doesn't vanish while the mouse crosses the gap
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 160);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <motion.button
        type="button"
        onPointerDown={(e) => (pointerType.current = e.pointerType)}
        onClick={() => {
          // A mouse already opened it on hover, so a click keeps it open
          if (pointerType.current === 'mouse') openMenu();
          else setOpen((value) => !value);
          pointerType.current = '';
        }}
        aria-expanded={open}
        aria-haspopup="true"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`${linkClasses(isActive || open)} inline-flex items-center gap-1.5`}
      >
        <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        <span className="relative z-10">{link.name}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="relative z-10">
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%', scale: 0.97 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: 10, x: '-50%', scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-1/2 top-full pt-4 w-[640px] max-w-[calc(100vw-2rem)]"
          >
            <div className="grid grid-cols-2 gap-3 p-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-indigo-100 shadow-2xl shadow-indigo-950/15">
              {link.children?.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  className="group/card rounded-2xl p-4 hover:bg-gradient-to-br hover:from-indigo-50/80 hover:to-sky-50/60 transition-colors"
                >
                  <a href={item.href} onClick={() => setOpen(false)} className="flex items-start gap-3">
                    <span className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-md group-hover/card:scale-110 group-hover/card:-rotate-6 transition-transform`}>
                      <item.icon className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1 font-extrabold text-[#3c319f]">
                        {item.name}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all" />
                      </span>
                      <span className="block text-xs text-slate-500 leading-snug mt-0.5">{item.description}</span>
                    </span>
                  </a>
                  <ul className="mt-3 pl-14 space-y-1">
                    {item.items.map((sub) => (
                      <li key={sub.name}>
                        <a
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="block text-sm font-semibold text-slate-600 hover:text-[#00a5d8] hover:translate-x-1 transition-all"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({
  brandName = 'Vollink',
  links = defaultLinks,
  logoSrc = logoImage // Uses the properly imported module as default
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const activeName = activeLinkName(useHash());

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-white/85 border-b border-indigo-100/60 shadow-lg shadow-indigo-950/5">

      {/* Decorative layers are clipped here so the Services dropdown can extend below the header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving Background Glow Light Line Across the Navbar Top */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#00a5d8] to-transparent"
        />

        {/* Floating Ambient Background Light Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-1/4 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Image Asset & 3D Tilt Effect */}
          <motion.a
            href="#"
            onClick={(e) => {
              const homeLink = links.find(l => l.name === 'Home');
              if (homeLink && homeLink.onClick) {
                homeLink.onClick(e);
              }
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotateY: 8, rotateX: -5 }}
            style={{ perspective: 1000 }}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3c319f] via-[#00a5d8] to-[#f60400] p-0.5 shadow-lg shadow-indigo-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden flex items-center justify-center">
              
              {/* Moving light shimmer pulse inside logo container */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
              />

              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden">
                {!imageError ? (
                  <img 
                    src={logoSrc} 
                    alt={`${brandName} Logo`} 
                    className="w-9 h-9 object-contain transform group-hover:scale-110 transition-transform duration-300"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Fallback Modern Vector Logo Icon if image is missing */
                  <svg className="w-6 h-6 text-[#3c319f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-[#3c319f] to-[#00a5d8] bg-clip-text text-transparent">
              {brandName}
            </span>
          </motion.a>

          {/* Desktop Colorful Capsule Navigation with Floating Particles */}
          <nav className="hidden md:flex items-center space-x-1 bg-gradient-to-r from-indigo-50/80 via-sky-50/80 to-rose-50/80 p-1.5 rounded-full border border-indigo-100 shadow-inner relative">
            {links.map((link, idx) =>
              link.children ? (
                <DesktopDropdown key={link.name} link={link} isActive={activeName === link.name} index={idx} />
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={link.onClick}
                  aria-current={activeName === link.name ? 'page' : undefined}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={linkClasses(activeName === link.name)}
                >
                  {/* Shimmer effect on hover */}
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ),
            )}
          </nav>

          {/* Action CTA Button with Pulsing Gradient Glow */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="#contact"
              onClick={(e) => {
                const contactLink = links.find(l => l.name === 'Contact');
                if (contactLink && contactLink.onClick) {
                  contactLink.onClick(e);
                }
              }}
              animate={{ 
                boxShadow: [
                  '0 10px 20px -5px rgba(0, 165, 216, 0.3)', 
                  '0 15px 30px -5px rgba(246, 4, 0, 0.4)', 
                  '0 10px 20px -5px rgba(0, 165, 216, 0.3)'
                ] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-[#3c319f] via-[#00a5d8] to-[#f60400] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#3c319f] hover:text-[#f60400] focus:outline-none p-2.5 rounded-2xl bg-indigo-50/80 border border-indigo-100 shadow-sm"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {!isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Smooth Slide & Fade Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-indigo-100 px-6 py-6 space-y-3 shadow-2xl rounded-b-3xl relative z-20"
          >
            {links.map((link, idx) =>
              link.children ? (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => setMobileExpanded((current) => (current === link.name ? null : link.name))}
                    aria-expanded={mobileExpanded === link.name}
                    className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 shadow-sm ${
                      activeName === link.name
                        ? 'text-white bg-gradient-to-r from-[#3c319f] to-[#00a5d8]'
                        : 'text-gray-700 hover:bg-indigo-50'
                    }`}
                  >
                    {link.name}
                    <motion.span animate={{ rotate: mobileExpanded === link.name ? 180 : 0 }}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileExpanded === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pl-3 space-y-2">
                          {link.children.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-indigo-50/80 to-sky-50/60 border border-indigo-100"
                            >
                              <span className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-md`}>
                                <item.icon className="w-5 h-5" />
                              </span>
                              <span>
                                <span className="block font-extrabold text-[#3c319f]">{item.name}</span>
                                <span className="block text-xs text-slate-500 leading-snug">{item.description}</span>
                              </span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.onClick) link.onClick(e);
                  }}
                  aria-current={activeName === link.name ? 'page' : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block px-5 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 shadow-sm ${
                    activeName === link.name
                      ? 'text-white bg-gradient-to-r from-[#3c319f] to-[#00a5d8]'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#3c319f] hover:to-[#00a5d8]'
                  }`}
                >
                  {link.name}
                </motion.a>
              ),
            )}
            <div className="pt-3">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  setIsOpen(false);
                  const contactLink = links.find(l => l.name === 'Contact');
                  if (contactLink && contactLink.onClick) contactLink.onClick(e);
                }}
                className="block text-center w-full py-3.5 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-[#3c319f] via-[#00a5d8] to-[#f60400] shadow-xl shadow-cyan-500/25"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};