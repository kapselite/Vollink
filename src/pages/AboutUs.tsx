import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';
import logoImage from '../assets/logo.png';

interface TeamMember {
  name: string;
  role: string;
  qualification: string;
}

interface CoreValue {
  number: string;
  title: string;
  description: string;
}

interface AboutUsProps {
  logoUrl?: string;
  logoAlt?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Makoshori Isaac',
    role: 'Business Development, Sales & Marketing',
    qualification: 'BBA in Marketing (IMM)',
  },
  {
    name: 'Tarisai Blessing Makoshori',
    role: 'Administration',
    qualification: 'BSC Hons in Science Education and Applications in Biology (UZ)',
  },
];

const coreValues: CoreValue[] = [
  {
    number: '01',
    title: 'Mutual Respect',
    description: 'We treat all individuals with dignity, valuing diverse perspectives and fostering an inclusive environment.',
  },
  {
    number: '02',
    title: 'Trust',
    description: 'We build reliable relationships through transparency, reliability, and consistent dependability.',
  },
  {
    number: '03',
    title: 'Openness',
    description: 'We foster clear communication, active feedback, and receptive collaboration across all interactions.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'We invest in continuous learning, personal advancement, and sustainable organizational growth.',
  },
  {
    number: '05',
    title: 'Performance',
    description: 'We lead by example and will not accept anything but the very best in all our efforts.',
  },
  {
    number: '06',
    title: 'Innovation',
    description: 'We embrace creative solutions, modern tech, and proactive strategies to tackle evolving challenges.',
  },
  {
    number: '07',
    title: 'Integrity',
    description: 'We each take responsibility for honouring our commitments and obligations.',
  },
];

// Animation Stagger Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const AboutUs: React.FC<AboutUsProps> = ({ 
  logoUrl = logoImage, 
  logoAlt = "Vollink (Pvt) Ltd Logo" 
}) => {
  const [activeValue, setActiveValue] = useState<number>(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveValue(index);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 overflow-hidden selection:bg-[#00a5d8] selection:text-white flex flex-col justify-between">

      {/* ================= RICH GRAPHICAL BACKGROUND & DYNAMIC ANIMATED LAYERS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Animated Dynamic Gradient Mesh Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            x: [0, 40, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-10 w-[550px] h-[550px] bg-[#00a5d8]/15 rounded-full blur-[110px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 40, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#f60400]/10 rounded-full blur-[130px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -50, 0] 
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 -left-20 w-[650px] h-[650px] bg-[#3c319f]/15 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            x: [0, -30, 0],
            y: [0, -30, 0] 
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-[#00a5d8]/15 rounded-full blur-[120px]" 
        />

        {/* Decorative Tech & Printing Grid Patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3c319f0a_1px,transparent_1px),linear-gradient(to_bottom,#3c319f0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(#00a5d8_1px,transparent_1px)] [background-size:24px_24px] opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated Geometric Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[950px] h-[950px] border border-dashed border-indigo-200/50 rounded-full pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-44 left-1/2 -translate-x-1/2 w-[700px] h-[700px] border border-sky-200/40 rounded-full pointer-events-none"
        />

        {/* Dynamic Graphic Floating Particles / Vector Nodes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-36 left-[10%] w-8 h-8 rounded-lg bg-gradient-to-br from-[#00a5d8]/20 to-[#3c319f]/20 backdrop-blur-sm border border-[#00a5d8]/30 flex items-center justify-center text-[#00a5d8]"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-[8%] w-10 h-10 rounded-full bg-gradient-to-tr from-[#f60400]/20 to-[#3c319f]/20 backdrop-blur-sm border border-[#f60400]/30 flex items-center justify-center text-[#f60400]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-[5%] w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00a5d8]/15 to-[#f60400]/15 backdrop-blur-sm border border-indigo-200/40 flex items-center justify-center text-[#3c319f]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        </motion.div>
      </div>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20 sm:space-y-28 z-10 w-full flex-grow">
        
        {/* ================= HERO HEADER WITH CLEAN LOGO (NO WHITE BG) ================= */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 flex flex-col items-center"
        >
          {/* Logo as raw image without background card, with layered backlight glow */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group cursor-pointer"
          >
            {/* Ambient Backlight Glow Effect Behind Logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a5d8]/30 via-[#3c319f]/30 to-[#f60400]/30 rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 transform scale-125" />
            
            {/* Animated Ring Accent around Floating Logo */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-[#00a5d8]/30 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <motion.img 
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              transition={{ duration: 0.4 }}
              src={logoUrl} 
              alt={logoAlt} 
              className="relative h-24 sm:h-48 md:h-56 max-w-xs sm:max-w-md object-contain drop-shadow-2xl"
            />
          </motion.div>

          <div className="space-y-5 max-w-3xl relative">
            {/* Decorative CMYK / Design Registration Accent Dots */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00a5d8] animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f60400] animate-pulse [animation-delay:200ms]" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse [animation-delay:400ms]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3c319f] animate-pulse [animation-delay:600ms]" />
            </div>

            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-gradient-to-r from-[#3c319f] via-indigo-600 to-[#00a5d8] shadow-lg shadow-indigo-500/25 border border-white/40"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Technology, Printing & Graphics Design
            </motion.span>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
              Your premier partner for integrated printer, printing products, IT infrastructure, and cutting-edge design solutions under one roof.
            </p>
          </div>

          {/* Animated Line Accent */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "140px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-[#00a5d8] via-[#3c319f] to-[#f60400] rounded-full shadow-md" 
          />
        </motion.div>

        {/* ================= WHO ARE WE ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/85 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl shadow-slate-200/80 border border-white/80 overflow-hidden group hover:shadow-indigo-200/50 transition-all duration-300"
        >
          {/* Top colored gradient border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3c319f] via-[#00a5d8] to-[#f60400]" />
          <div className="absolute left-0 top-0 w-2.5 h-full bg-[#00a5d8]" />

          {/* Graphical Crop / Printing Crosshair Accents */}
          <div className="absolute top-4 right-4 text-slate-300 pointer-events-none">
            <svg className="w-8 h-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="6" strokeWidth="1"/>
              <path strokeWidth="1" d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
            </svg>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#f60400] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#3c319f]">Company Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3c319f] tracking-tight">
              WHO ARE WE?
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg font-normal">
              <p>
                Vollink (Pvt) Ltd is a registered company in compliance with the Zimbabwe Companies Act [Chapter 24:03]. Currently, it stands as one of the leading names in the provision of printer, printing, graphic designing, and IT products and services.
              </p>
              <p>
                We are proud to be among the few—if not the first—to provide these products and services entirely under one roof. We express our profound gratitude for the opportunity to introduce Vollink (Pvt) Ltd as your new alternative supplier for renowned organizations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/70 border border-white flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#00a5d8]/15 to-transparent rounded-bl-full pointer-events-none" />

            {/* Graphical Background Node Decor */}
            <div className="absolute bottom-4 right-4 opacity-10 text-[#00a5d8] pointer-events-none">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-[#00a5d8]/10 border border-[#00a5d8]/20 flex items-center justify-center text-[#00a5d8] group-hover:bg-[#00a5d8] group-hover:text-white transition-all duration-300 shadow-md"
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
                <span className="text-xs font-bold text-[#00a5d8] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 uppercase tracking-widest">
                  Vision
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3c319f]">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed font-normal text-base sm:text-lg">
                We commit ourselves to becoming the most preferred provider of IT, printer, and printing products and services throughout Zimbabwe and the Sub-Saharan region.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold relative z-10">
              <span>TARGET REGION</span>
              <span className="text-[#00a5d8]">Zimbabwe & Sub-Saharan Region</span>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/70 border border-white flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#f60400]/15 to-transparent rounded-bl-full pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <motion.div 
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-[#f60400]/10 border border-[#f60400]/20 flex items-center justify-center text-[#f60400] group-hover:bg-[#f60400] group-hover:text-white transition-all duration-300 shadow-md"
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <span className="text-xs font-bold text-[#f60400] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 uppercase tracking-widest">
                  Mission
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3c319f]">Our Mission</h3>
              <p className="text-slate-600 font-medium text-sm sm:text-base">We aim to run a dynamic and vibrant business through:</p>

              <ul className="space-y-3 text-slate-700 text-sm sm:text-base font-normal">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 transition-transform"
                >
                  <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-[#f60400] shrink-0 shadow-sm" />
                  <span>Total commitment to excellence by getting things right the first time, all the time.</span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 transition-transform"
                >
                  <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-[#f60400] shrink-0 shadow-sm" />
                  <span>Clearly understanding and satisfying customer needs affordably and sustainably.</span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 transition-transform"
                >
                  <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-[#f60400] shrink-0 shadow-sm" />
                  <span>Being more proactive, innovative, and pioneering than any competitor.</span>
                </motion.li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold relative z-10">
              <span>APPROACH</span>
              <span className="text-[#f60400]">Dynamic & Vibrant</span>
            </div>
          </motion.div>

        </div>

        {/* ================= CORE VALUES ================= */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-[#f60400] shadow-md shadow-red-500/20">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3c319f]">Core Values</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-normal">
              The values we subscribe to are a way of showing commitment to the culture we are in the process of instilling in all our stakeholders.
            </p>
            <div className="w-16 h-1 bg-[#00a5d8] mx-auto rounded-full" />
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/80 space-y-8 relative overflow-hidden">
            
            {/* Interactive Animated Spotlight Card */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#3c319f] via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              {/* Animated Floating Glow Blob inside Spotlight Card */}
              <motion.div 
                animate={{ x: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#00a5d8]/30 rounded-full blur-3xl pointer-events-none"
              />

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeValue}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
                >
                  <div className="space-y-2 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#00a5d8] text-white shadow-md">
                        Core Value {coreValues[activeValue].number}
                      </span>
                      <span className="text-xs text-indigo-200 uppercase tracking-wider font-semibold">Active Selection</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {coreValues[activeValue].title}
                    </h3>
                    <p className="text-indigo-100 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
                      {coreValues[activeValue].description}
                    </p>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-extrabold text-white shrink-0 shadow-inner"
                  >
                    {coreValues[activeValue].number}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Core Values Cards Grid with Staggered Entrance */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {coreValues.map((value, idx) => {
                const isActive = activeValue === idx;
                return (
                  <motion.div
                    key={value.number}
                    variants={itemVariants}
                    onClick={() => setActiveValue(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-[#00a5d8] ${
                      isActive 
                        ? 'bg-gradient-to-b from-sky-50 to-indigo-50/50 border-[#00a5d8] shadow-md shadow-sky-100 ring-2 ring-[#00a5d8]/20' 
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center shadow-sm transition-colors ${
                          isActive 
                            ? 'bg-[#f60400] text-white' 
                            : 'bg-indigo-50 text-[#3c319f] group-hover:bg-[#3c319f] group-hover:text-white'
                        }`}>
                          {value.number}
                        </span>
                        <span className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isActive ? 'bg-[#00a5d8]' : 'bg-slate-300 group-hover:bg-[#00a5d8]'
                        }`} />
                      </div>

                      <h4 className={`text-base font-bold transition-colors ${
                        isActive ? 'text-[#3c319f]' : 'text-slate-800 group-hover:text-[#3c319f]'
                      }`}>
                        {value.title}
                      </h4>

                      <p className="text-slate-600 text-xs leading-relaxed font-normal">
                        {value.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                      <span>VOLLINK VALUE</span>
                      <span className={isActive ? 'text-[#00a5d8]' : 'text-slate-400'}>
                        {isActive ? 'Selected' : 'Click to view'}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>

        {/* ================= MANAGEMENT TEAM ================= */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white bg-[#3c319f] shadow-md shadow-indigo-500/20">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3c319f]">The Management Team</h2>
            <div className="w-16 h-1 bg-[#00a5d8] mx-auto rounded-full" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/70 border border-white flex flex-col items-center text-center group relative overflow-hidden"
              >
                {/* Accent glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00a5d8]/5 via-transparent to-[#3c319f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Animated Avatar Frame with Rotating Gradient Border */}
                <div className="relative mb-6">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#00a5d8] via-[#3c319f] to-[#f60400] opacity-75 blur-sm group-hover:opacity-100 transition-opacity"
                  />
                  
                  <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#00a5d8] via-[#3c319f] to-[#f60400] p-1 shadow-lg shadow-indigo-500/15 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center text-[#3c319f]">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#3c319f] mb-2 relative z-10">{member.name}</h3>
                <p className="text-[#00a5d8] font-semibold text-base mb-4 relative z-10">{member.role}</p>
                <p className="text-[#f60400] text-xs font-semibold bg-red-50 px-4 py-2 rounded-full border border-red-100 shadow-sm relative z-10">
                  {member.qualification}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default AboutUs;