import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.png'; // Correct default import for image assets

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  brandName?: string;
  links?: NavLink[];
  logoSrc?: string;
}

const defaultLinks: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ 
  brandName = 'Vollink', 
  links = defaultLinks,
  logoSrc = logoImage // Uses the properly imported module as default
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-white/85 border-b border-indigo-100/60 shadow-lg shadow-indigo-950/5 overflow-hidden">
      
      {/* Moving Background Glow Light Line Across the Navbar Top */}
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#00a5d8] to-transparent pointer-events-none"
      />

      {/* Floating Ambient Background Light Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-1/4 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Image Asset & 3D Tilt Effect */}
          <motion.a
            href="#"
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

            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#3c319f] drop-shadow-sm flex items-center gap-1">
                {brandName}
                <motion.span 
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[#f60400]"
                >
                  .
                </motion.span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#00a5d8]">
                (Pvt) Ltd
              </span>
            </div>
          </motion.a>

          {/* Desktop Colorful Capsule Navigation with Floating Particles */}
          <nav className="hidden md:flex items-center space-x-1 bg-gradient-to-r from-indigo-50/80 via-sky-50/80 to-rose-50/80 p-1.5 rounded-full border border-indigo-100 shadow-inner relative">
            {links.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full text-sm font-bold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#3c319f] hover:to-[#00a5d8] transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-indigo-500/20 relative overflow-hidden group"
              >
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Action CTA Button with Pulsing Gradient Glow */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="#contact"
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
            {links.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="block px-5 py-3.5 rounded-2xl text-base font-bold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#3c319f] hover:to-[#00a5d8] transition-all duration-300 shadow-sm"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="pt-3">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
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