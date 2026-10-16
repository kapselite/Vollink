import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  animate,
  AnimatePresence,
  MotionConfig,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Marquee } from '../components/Marquee';
import { PrinterShowcase } from '../components/PrinterShowcase';
import logo from '../assets/logo.png';

type Category = 'Print & Design' | 'Technology';

interface Service {
  title: string;
  category: Category;
  description: string;
  tags: string[];
  icon: string[];
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface Reason {
  title: string;
  description: string;
}

const phoneNumber = '263773732447';
const phoneDisplay = '+263 773 732 447';
const salesEmail = 'sales@vollink.co.zw';

const whatsappLink = (message: string) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const rotatingWords = ['Printing', 'Signage', 'Branding', 'Graphic Design', 'IT Solutions'];

const brands = ['HP', 'Canon', 'Xerox', 'Epson', 'Konica Minolta'];

const partners = [
  'TN Asset Management',
  'Coopers',
  'Zimbabwe Without Orphans',
  'Enbee School Wear',
  'Vanilla Moon',
  'DEAZ',
  'Zimbabwe Fish Producers Association',
  'Dandaro Unisex Hair Salon',
  'EMMB Africa',
];

const services: Service[] = [
  {
    title: 'Graphic Designing',
    category: 'Print & Design',
    description: 'Logos, flyers, brochures and brand artwork that make your business stand out.',
    tags: ['Logos', 'Flyers', 'Brochures'],
    icon: ['M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'],
  },
  {
    title: 'Printing',
    category: 'Print & Design',
    description: 'Business cards, calendars, brochures and large-format prints in rich, vibrant colour.',
    tags: ['Business Cards', 'Calendars', 'Large Format'],
    icon: ['M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'],
  },
  {
    title: 'Signage',
    category: 'Print & Design',
    description: 'Signs that get you noticed, from the front desk to the roadside.',
    tags: ['3D Signage', 'Billboards', 'Lightbox', 'Pylons', 'Office Signage'],
    icon: ['M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'],
  },
  {
    title: 'Branding',
    category: 'Print & Design',
    description: 'Put your brand everywhere your customers are: on banners, gazebos, vehicles and offices.',
    tags: ['Banners', 'Gazebos', 'Vehicle Branding', 'Office Branding'],
    icon: ['M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'],
  },
  {
    title: 'T-Shirt Printing',
    category: 'Print & Design',
    description: 'Custom shirts for teams, celebrations and memorials, printed to last.',
    tags: ['Corporate', 'Social', 'Church', 'Family Events'],
    icon: ['M8 3L3 6l2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 01-8 0z'],
  },
  {
    title: 'Promotional Gifts',
    category: 'Print & Design',
    description: 'Branded mugs, pens, umbrellas, bags and notebooks that keep your name in hand.',
    tags: ['Mugs', 'Pens', 'Umbrellas', 'Bags'],
    icon: ['M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'],
  },
  {
    title: 'Cartridges',
    category: 'Technology',
    description: 'Genuine HP and Canon toner and ink cartridges to keep your printers running.',
    tags: ['HP Toner', 'HP Ink', 'Canon Toner', 'Canon Ink'],
    icon: ['M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'],
  },
  {
    title: 'Printers & Copiers',
    category: 'Technology',
    description: 'Office printers and copiers from the brands you trust, for home desks and busy offices.',
    tags: ['Xerox', 'Konica Minolta', 'HP', 'Epson', 'Canon'],
    icon: ['M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'],
  },
  {
    title: 'Printer Repair',
    category: 'Technology',
    description: 'Expert servicing and repairs to get your printers and copiers back to work.',
    tags: ['Xerox', 'Konica Minolta', 'HP', 'Epson', 'Canon'],
    icon: [
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    ],
  },
  {
    title: 'Computers & Accessories',
    category: 'Technology',
    description: 'Desktops, laptops and the parts and accessories that keep them running.',
    tags: ['Laptops', 'Desktops', 'SSDs & RAM', 'Keyboards & Mice'],
    icon: ['M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'],
  },
];

const tabs: Array<'All' | Category> = ['All', 'Print & Design', 'Technology'];

const stats: Stat[] = [
  { value: new Date().getFullYear() - 2012, suffix: '+', label: 'Years in business' },
  { value: services.length, suffix: '', label: 'Services under one roof' },
  { value: brands.length, suffix: '', label: 'Printer brands supplied & repaired' },
  { value: partners.length, suffix: '+', label: 'Business partners' },
];

const reasons: Reason[] = [
  {
    title: 'Everything under one roof',
    description: 'Design, printing, branding, cartridges, printers and repairs. One supplier, one call.',
  },
  {
    title: 'Right the first time',
    description: 'Total commitment to excellence: getting the right things right, the first time, all the time.',
  },
  {
    title: 'Affordable & sustainable',
    description: 'We take the time to understand what you need and deliver it at a price that works for you.',
  },
  {
    title: 'Proactive & innovative',
    description: 'We aim to be more proactive, innovative and pioneering than anyone else in the market.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Icon: React.FC<{ paths: string[]; className?: string }> = ({ paths, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {paths.map((d) => (
      <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    ))}
  </svg>
);

const chatIcon = ['M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'];
const arrowIcon = ['M17 8l4 4m0 0l-4 4m4-4H3'];
const checkIcon = ['M5 13l4 4L19 7'];

// Shared section heading with the brand pill and underline accent
const SectionHeading: React.FC<{ pill: string; title: string; subtitle: string; pillClass?: string }> = ({
  pill,
  title,
  subtitle,
  pillClass = 'bg-[#3c319f] shadow-indigo-500/20',
}) => (
  <div className="text-center space-y-3">
    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white shadow-md ${pillClass}`}>
      {pill}
    </span>
    <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3c319f]">{title}</h2>
    <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">{subtitle}</p>
    <div className="w-16 h-1 bg-[#00a5d8] mx-auto rounded-full" />
  </div>
);

// Number that counts up the first time it scrolls into view
const Counter: React.FC<{ to: number; suffix: string }> = ({ to, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.6, ease: 'easeOut' });
    return () => controls.stop();
  }, [inView, to, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

// Service card that tilts towards the cursor with a spotlight that follows it
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${spotX}px ${spotY}px, rgba(0,165,216,0.16), transparent 70%)`;
  const isTech = service.category === 'Technology';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 10);
    rotateY.set((px - 0.5) * 10);
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="relative h-full bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-white shadow-xl shadow-slate-200/70 overflow-hidden group flex flex-col"
    >
      <motion.div
        style={{ background: spotlight }}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
      <div className={`absolute top-0 left-0 w-full h-1.5 ${isTech ? 'bg-gradient-to-r from-[#f60400] to-[#3c319f]' : 'bg-gradient-to-r from-[#3c319f] to-[#00a5d8]'}`} />

      <div className="relative flex items-center justify-between mb-5">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
            isTech
              ? 'bg-[#f60400]/10 text-[#f60400] group-hover:bg-[#f60400] group-hover:text-white'
              : 'bg-[#00a5d8]/10 text-[#00a5d8] group-hover:bg-[#00a5d8] group-hover:text-white'
          }`}
        >
          <Icon paths={service.icon} />
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{service.category}</span>
      </div>

      <h3 className="relative text-xl font-bold text-[#3c319f] mb-2">{service.title}</h3>
      <p className="relative text-sm text-slate-600 leading-relaxed mb-4">{service.description}</p>

      <div className="relative flex flex-wrap gap-1.5 mb-5">
        {service.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={whatsappLink(`Hi Vollink, I'm interested in ${service.title}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#f60400] hover:gap-3 transition-all duration-200"
      >
        Ask about this
        <Icon paths={arrowIcon} className="w-4 h-4" />
      </a>
    </motion.div>
  );
};

export const Home: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'All' | Category>('All');
  const [selected, setSelected] = useState<string[]>([]);

  // Cycle the highlighted word in the hero headline
  useEffect(() => {
    const timer = setInterval(() => setWordIndex((i) => (i + 1) % rotatingWords.length), 2400);
    return () => clearInterval(timer);
  }, []);

  const visibleServices = activeTab === 'All' ? services : services.filter((s) => s.category === activeTab);

  const toggleService = (title: string) =>
    setSelected((current) =>
      current.includes(title) ? current.filter((t) => t !== title) : [...current, title],
    );

  const quoteMessage =
    selected.length > 0
      ? `Hi Vollink, I'd like a quote for: ${selected.join(', ')}.`
      : "Hi Vollink, I'd like to find out more about your services.";

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative bg-slate-50 text-slate-800 overflow-hidden selection:bg-[#00a5d8] selection:text-white">

        {/* ================= HERO ================= */}
        <section id="home" className="relative scroll-mt-16 min-h-[calc(100vh-4rem)] flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-32 -left-20 w-[520px] h-[520px] bg-[#00a5d8]/15 rounded-full blur-[110px]"
            />
            <motion.div
              animate={{ scale: [1, 1.25, 1], x: [0, -40, 0], y: [0, 40, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 right-0 w-[560px] h-[560px] bg-[#3c319f]/15 rounded-full blur-[130px]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], y: [0, -40, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-40 left-1/3 w-[480px] h-[480px] bg-[#f60400]/10 rounded-full blur-[120px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3c319f0a_1px,transparent_1px),linear-gradient(to_bottom,#3c319f0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_60%,transparent_100%)]" />

            {/* Printer registration marks */}
            {['top-8 left-8', 'top-8 right-8', 'bottom-8 left-8', 'bottom-8 right-8'].map((position) => (
              <svg key={position} className={`absolute ${position} w-8 h-8 text-[#3c319f]/20 hidden md:block`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="6" strokeWidth="1" />
                <path strokeWidth="1" d="M12 2v20M2 12h20" />
              </svg>
            ))}
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Hero Copy */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-7 text-center lg:text-left">
              <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00a5d8] animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e11d74] animate-pulse [animation-delay:200ms]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse [animation-delay:400ms]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3c319f] animate-pulse [animation-delay:600ms]" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#3c319f]">Harare, Zimbabwe · Since 2012</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#3c319f] leading-[1.1] text-balance">
                One roof for all your
                <span className="relative block h-[1.3em] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="absolute top-0 inset-x-0 lg:right-auto block pb-[0.1em] bg-gradient-to-r from-[#f60400] via-[#e11d74] to-[#00a5d8] bg-clip-text text-transparent"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-600 leading-relaxed">
                Vollink designs, prints and brands, and supplies and repairs the printers and computers your business depends on.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f60400] text-white font-bold shadow-lg shadow-red-500/30 hover:bg-[#d40300] transition-colors"
                >
                  Get a Quote
                  <Icon paths={arrowIcon} className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#3c319f] font-bold border border-indigo-100 shadow-md hover:border-[#00a5d8] transition-colors"
                >
                  Explore Services
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm font-semibold text-slate-500">
                {['Design', 'Print', 'Brand', 'Supply', 'Repair'].map((step) => (
                  <span key={step} className="inline-flex items-center gap-1.5">
                    <Icon paths={checkIcon} className="w-4 h-4 text-[#00a5d8]" />
                    {step}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Interactive Printer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <PrinterShowcase />
            </motion.div>
          </div>
        </section>

        {/* ================= BRANDS STRIP ================= */}
        <section aria-label="Brands we supply" className="relative border-y border-indigo-100 bg-white/70 backdrop-blur-xl py-5">
          <Marquee
            items={brands}
            duration={25}
            renderItem={(brand) => (
              <span className="inline-flex items-center gap-4 px-4 text-xl sm:text-2xl font-black tracking-tight text-slate-300 hover:text-[#3c319f] transition-colors whitespace-nowrap">
                {brand}
                <span className="w-2 h-2 rounded-full bg-[#f60400]/60" />
              </span>
            )}
          />
        </section>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-24 sm:space-y-32">

          {/* ================= SERVICES ================= */}
          <section id="services" className="scroll-mt-24 space-y-10">
            <SectionHeading
              pill="What We Do"
              title="Our Services"
              subtitle="From the first sketch to the final print, and the machines that make it happen."
            />

            {/* Category Tabs */}
            <div className="flex justify-center">
              <div role="tablist" aria-label="Service categories" className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-full bg-white border border-indigo-100 shadow-md">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a5d8] ${
                      activeTab === tab ? 'text-white' : 'text-slate-600 hover:text-[#3c319f]'
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.span
                        layoutId="service-tab"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3c319f] to-[#00a5d8]"
                      />
                    )}
                    <span className="relative">{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {visibleServices.map((service) => (
                  <motion.div
                    key={service.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="[perspective:1000px]"
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* ================= WHY VOLLINK ================= */}
          <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3c319f] via-indigo-900 to-[#16123f] text-white p-8 sm:p-14 shadow-2xl shadow-indigo-900/30">
            <motion.div
              animate={{ x: [0, 60, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#00a5d8]/30 rounded-full blur-3xl pointer-events-none"
            />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff14_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="space-y-6"
              >
                <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#f60400] shadow-md shadow-red-500/30">
                  Why Vollink
                </motion.span>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold leading-tight">
                  Your print & tech partner, start to finish
                </motion.h2>
                <ul className="space-y-4">
                  {reasons.map((reason) => (
                    <motion.li key={reason.title} variants={itemVariants} whileHover={{ x: 6 }} className="flex gap-4">
                      <span className="mt-1 w-7 h-7 rounded-lg bg-[#00a5d8] flex items-center justify-center shrink-0 shadow-md">
                        <Icon paths={checkIcon} className="w-4 h-4" />
                      </span>
                      <div>
                        <h3 className="font-bold text-lg">{reason.title}</h3>
                        <p className="text-indigo-100/90 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl p-5 sm:p-7 hover:bg-white/15 transition-colors"
                  >
                    <div className="text-4xl sm:text-5xl font-black text-white">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 h-1 w-10 rounded-full bg-[#f60400]" />
                    <p className="mt-3 text-sm font-semibold text-indigo-100">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= PARTNERS ================= */}
          <section className="space-y-10">
            <SectionHeading
              pill="Trusted By"
              title="Our Business Partners"
              subtitle="Organisations across Zimbabwe that rely on Vollink for their printing, branding and technology."
              pillClass="bg-[#f60400] shadow-red-500/20"
            />
            <div className="space-y-4">
              <Marquee
                items={partners}
                duration={40}
                renderItem={(partner) => (
                  <span className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-sm font-bold text-slate-600 whitespace-nowrap hover:border-[#00a5d8] hover:text-[#3c319f] transition-colors">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3c319f] to-[#00a5d8]" />
                    {partner}
                  </span>
                )}
              />
              <Marquee
                items={[...partners].reverse()}
                duration={45}
                reverse
                renderItem={(partner) => (
                  <span className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/60 border border-slate-200/60 text-sm font-semibold text-slate-400 whitespace-nowrap hover:text-[#f60400] transition-colors">
                    <span className="w-2 h-2 rounded-full bg-[#f60400]/50" />
                    {partner}
                  </span>
                )}
              />
            </div>
          </section>

          {/* ================= QUOTE BUILDER / CONTACT ================= */}
          <section id="contact" className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/90 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-12 border border-white shadow-2xl shadow-slate-200/80 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#3c319f] via-[#00a5d8] to-[#f60400]" />

              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#f60400] animate-pulse" />
                    <span className="text-xs uppercase tracking-widest font-extrabold text-[#3c319f]">Start a Project</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3c319f] tracking-tight">
                    What can we do for you?
                  </h2>
                  <p className="text-slate-600">
                    Pick everything you need and we'll put your quote request together. Send it to us on WhatsApp in one tap.
                  </p>

                  <div className="flex flex-wrap gap-2" role="group" aria-label="Services for your quote">
                    {services.map((service) => {
                      const isSelected = selected.includes(service.title);
                      return (
                        <motion.button
                          key={service.title}
                          type="button"
                          onClick={() => toggleService(service.title)}
                          aria-pressed={isSelected}
                          whileTap={{ scale: 0.94 }}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a5d8] ${
                            isSelected
                              ? 'bg-[#3c319f] border-[#3c319f] text-white shadow-md shadow-indigo-500/20'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-[#00a5d8] hover:text-[#3c319f]'
                          }`}
                        >
                          <AnimatePresence initial={false}>
                            {isSelected && (
                              <motion.span
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 'auto', opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <Icon paths={checkIcon} className="w-4 h-4" />
                              </motion.span>
                            )}
                          </AnimatePresence>
                          {service.title}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Message Preview */}
                <div className="rounded-3xl bg-[#ece5dd] p-5 sm:p-6 shadow-inner space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-black/5">
                    <div className="w-10 h-10 rounded-full bg-white p-1 shadow-sm ring-1 ring-black/5 flex items-center justify-center overflow-hidden">
                      <img src={logo} alt="Vollink logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Vollink Sales</p>
                      <p className="text-xs text-slate-500">{phoneDisplay}</p>
                    </div>
                  </div>

                  <div className="flex justify-end min-h-24">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={quoteMessage}
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="max-w-[90%] self-start rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-4 py-3 text-sm text-slate-800 shadow-sm"
                      >
                        {quoteMessage}
                        <span className="block text-right text-[10px] text-slate-500 mt-1">Preview</span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <motion.a
                    href={whatsappLink(quoteMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#f60400] text-white font-bold shadow-lg shadow-red-500/30 hover:bg-[#d40300] transition-colors"
                  >
                    <Icon paths={chatIcon} className="w-5 h-5" />
                    Send on WhatsApp
                  </motion.a>

                  <div className="flex flex-col sm:flex-row gap-3 text-sm">
                    <a
                      href={`tel:+${phoneNumber}`}
                      className="flex-1 text-center px-4 py-2.5 rounded-full bg-white/70 font-semibold text-[#3c319f] hover:bg-white transition-colors"
                    >
                      Call Us
                    </a>
                    <a
                      href={`mailto:${salesEmail}?subject=${encodeURIComponent('Quote request')}&body=${encodeURIComponent(quoteMessage)}`}
                      className="flex-1 text-center px-4 py-2.5 rounded-full bg-white/70 font-semibold text-[#3c319f] hover:bg-white transition-colors"
                    >
                      Email Sales
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Home;
