import React, { useEffect, useMemo, useState } from 'react';
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { MotionValue, Variants } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, MessageCircle, PackageSearch, Search, X } from 'lucide-react';
import { cartridges, categories, categoryHref } from '../data/services';
import type { CategoryId, GalleryImage, ServiceCategory, ServiceDetail } from '../data/services';
import { whatsappLink } from '../data/contact';

interface Theme {
  text: string;
  bg: string;
  soft: string;
  gradient: string;
  border: string;
  shadow: string;
}

// Each category gets its own accent so the two pages feel related but distinct
const themes: Record<CategoryId, Theme> = {
  'print-design': {
    text: 'text-[#00a5d8]',
    bg: 'bg-[#00a5d8]',
    soft: 'bg-[#00a5d8]/10',
    gradient: 'from-[#3c319f] to-[#00a5d8]',
    border: 'border-[#00a5d8]',
    shadow: 'shadow-sky-500/20',
  },
  technology: {
    text: 'text-[#f60400]',
    bg: 'bg-[#f60400]',
    soft: 'bg-[#f60400]/10',
    gradient: 'from-[#f60400] to-[#3c319f]',
    border: 'border-[#f60400]',
    shadow: 'shadow-red-500/20',
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

// Spread around the edges so the photos overlap only slightly
const collagePositions = [
  { className: 'left-[2%] top-[4%] w-[34%]', depth: 30 },
  { className: 'right-0 top-[2%] w-[40%]', depth: 50 },
  { className: 'left-[36%] bottom-0 w-[26%]', depth: 40 },
  { className: 'right-[2%] bottom-[8%] w-[34%]', depth: 22 },
];

// Floating product photo that drifts with the cursor; deeper photos move further
const CollageImage: React.FC<{ src: string; index: number; mx: MotionValue<number>; my: MotionValue<number> }> = ({
  src,
  index,
  mx,
  my,
}) => {
  const { className, depth } = collagePositions[index];
  const x = useTransform(mx, [-0.5, 0.5], [-depth, depth]);
  const y = useTransform(my, [-0.5, 0.5], [-depth, depth]);

  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <motion.img
        src={src}
        alt=""
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2 + index * 0.12 },
          scale: { duration: 0.6, delay: 0.2 + index * 0.12 },
          y: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="w-full h-auto drop-shadow-2xl"
      />
    </motion.div>
  );
};

const Hero: React.FC<{ category: ServiceCategory; other: ServiceCategory; theme: Theme }> = ({ category, other, theme }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(my, { stiffness: 80, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full blur-[120px] ${theme.soft}`}
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-20 w-[480px] h-[480px] bg-[#3c319f]/10 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3c319f0a_1px,transparent_1px),linear-gradient(to_bottom,#3c319f0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {/* Breadcrumb */}
          <motion.nav variants={itemVariants} aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
            <a href="#" className="hover:text-[#3c319f] transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="#services" className="hover:text-[#3c319f] transition-colors">Services</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#3c319f]">{category.title}</span>
          </motion.nav>

          <motion.span
            variants={itemVariants}
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white shadow-md bg-gradient-to-r ${theme.gradient} ${theme.shadow}`}
          >
            Our Services
          </motion.span>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#3c319f] leading-[1.1]">
            {category.title}
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-xl text-lg text-slate-600 leading-relaxed">
            {category.intro}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {category.services.map((service) => (
              <a
                key={service.slug}
                href={categoryHref(category.id, service.slug)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm hover:border-[#3c319f] hover:text-[#3c319f] hover:-translate-y-0.5 transition-all"
              >
                <service.icon className={`w-4 h-4 ${theme.text}`} />
                {service.title}
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#f60400] text-white font-bold shadow-lg shadow-red-500/30 hover:bg-[#d40300] transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={categoryHref(other.id)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#3c319f] font-bold border border-indigo-100 shadow-md hover:border-[#00a5d8] transition-colors"
            >
              View {other.shortTitle}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Product Collage */}
        <div className="relative h-80 sm:h-[26rem]" aria-hidden="true">
          <div className={`absolute inset-10 rounded-full blur-3xl opacity-60 ${theme.soft}`} />
          {category.heroImages.map((src, index) => (
            <CollageImage key={src} src={src} index={index} mx={smoothX} my={smoothY} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sticky jump links that highlight the section currently in view
const SectionNav: React.FC<{ services: ServiceDetail[]; categoryId: CategoryId; active: string; theme: Theme }> = ({
  services,
  categoryId,
  active,
  theme,
}) => (
  <div className="sticky top-20 z-30 bg-white/85 backdrop-blur-xl border-y border-indigo-100/70 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav aria-label="Jump to service" className="flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {services.map((service) => {
          const isActive = active === service.slug;
          return (
            <a
              key={service.slug}
              href={categoryHref(categoryId, service.slug)}
              aria-current={isActive ? 'true' : undefined}
              className={`relative shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                isActive ? 'text-white' : 'text-slate-600 hover:text-[#3c319f]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={`section-pill-${categoryId}`}
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${theme.gradient}`}
                />
              )}
              <span className="relative">{service.title}</span>
            </a>
          );
        })}
      </nav>
    </div>
  </div>
);

// Large photo with clickable thumbnails underneath
const Gallery: React.FC<{ images: GalleryImage[]; theme: Theme }> = ({ images, theme }) => {
  const [index, setIndex] = useState(0);
  const rotateX = useSpring(0, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 18 });
  const current = images[index];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 12);
    rotateX.set((0.5 - (e.clientY - rect.top) / rect.height) * 12);
  };

  return (
    <div className="space-y-4">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          rotateX.set(0);
          rotateY.set(0);
        }}
        className="relative aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-white to-slate-100 border border-white shadow-xl shadow-slate-200/80 overflow-hidden [perspective:1000px]"
      >
        <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-32 rounded-full blur-3xl ${theme.soft}`} />
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.caption}
            loading="lazy"
            decoding="async"
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -30 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 m-auto max-w-[82%] max-h-[78%] object-contain drop-shadow-2xl"
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.span
            key={current.caption}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-4 bottom-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-[#3c319f] shadow-sm"
          >
            {current.caption}
          </motion.span>
        </AnimatePresence>
        {images.length > 1 && (
          <span className="absolute right-4 top-4 px-3 py-1 rounded-full bg-[#3c319f]/80 text-[11px] font-bold text-white">
            {index + 1} / {images.length}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
          {images.map((image, i) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setIndex(i)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Show ${image.caption}`}
              aria-pressed={i === index}
              className={`aspect-square rounded-2xl bg-white border-2 p-1.5 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a5d8] ${
                i === index ? theme.border : 'border-transparent hover:border-slate-200'
              }`}
            >
              <img src={image.src} alt="" loading="lazy" decoding="async" className="w-full h-full object-contain" />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

type BrandFilter = 'All' | 'HP' | 'Canon';
type TypeFilter = 'All' | 'Toner' | 'Ink';

// Searchable list of the cartridges shown in the company profile
const CartridgeFinder: React.FC<{ theme: Theme }> = ({ theme }) => {
  const [query, setQuery] = useState('');
  const [brand, setBrand] = useState<BrandFilter>('All');
  const [type, setType] = useState<TypeFilter>('All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cartridges.filter(
      (c) =>
        (brand === 'All' || c.brand === brand) &&
        (type === 'All' || c.type === type) &&
        (!q || `${c.brand} ${c.model} ${c.type} ${c.note}`.toLowerCase().includes(q)),
    );
  }, [query, brand, type]);

  const filterButton = (label: string, isActive: boolean, onClick: () => void) => (
    <button
      key={label}
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`px-4 py-2 rounded-full text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a5d8] ${
        isActive ? 'bg-[#3c319f] text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:border-[#3c319f]'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="rounded-[2rem] bg-white/90 backdrop-blur-xl border border-white shadow-xl shadow-slate-200/80 p-5 sm:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <label className="relative flex-1">
          <span className="sr-only">Search cartridges</span>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by model, e.g. 912 or 057"
            className="w-full pl-12 pr-10 py-3.5 rounded-full bg-slate-50 border [&::-webkit-search-cancel-button]:hidden border-slate-200 text-sm font-semibold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#00a5d8] focus:ring-4 focus:ring-[#00a5d8]/15"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </label>
        <div className="flex flex-wrap gap-2">
          {(['All', 'HP', 'Canon'] as BrandFilter[]).map((b) => filterButton(b === 'All' ? 'All brands' : b, brand === b, () => setBrand(b)))}
          <span className="hidden sm:block w-px bg-slate-200 mx-1" />
          {(['All', 'Toner', 'Ink'] as TypeFilter[]).map((t) => filterButton(t === 'All' ? 'All types' : t, type === t, () => setType(t)))}
        </div>
      </div>

      <p className="text-sm text-slate-500" aria-live="polite">
        Showing <span className="font-bold text-[#3c319f]">{results.length}</span> of {cartridges.length} featured cartridges
      </p>

      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <AnimatePresence mode="popLayout">
          {results.map((c) => (
            <motion.div
              key={`${c.brand}-${c.model}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 p-4 hover:shadow-xl hover:shadow-slate-200 transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase text-white ${c.brand === 'HP' ? 'bg-[#0096d6]' : 'bg-[#cc0000]'}`}>
                  {c.brand}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{c.type}</span>
              </div>
              <div className="aspect-square flex items-center justify-center">
                <img src={c.image} alt={`${c.brand} ${c.model} ${c.type.toLowerCase()} cartridge`} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h4 className="mt-3 text-lg font-extrabold text-[#3c319f]">{c.brand} {c.model}</h4>
              <p className="text-xs text-slate-500 leading-snug flex-1">{c.note}</p>
              <a
                href={whatsappLink(`Hi Vollink, do you have the ${c.brand} ${c.model} ${c.type.toLowerCase()} cartridge in stock?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 inline-flex items-center gap-1.5 text-xs font-bold ${theme.text} hover:gap-2.5 transition-all`}
              >
                Check availability
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {results.length === 0 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8 space-y-3">
          <PackageSearch className="w-12 h-12 mx-auto text-slate-300" />
          <p className="font-bold text-slate-700">Not in our featured list?</p>
          <p className="text-sm text-slate-500">These are just some of the cartridges we supply. Ask us about your model.</p>
          <a
            href={whatsappLink(`Hi Vollink, do you have a cartridge for: ${query || 'my printer'}?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f60400] text-white text-sm font-bold shadow-lg shadow-red-500/30"
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </a>
        </motion.div>
      )}
    </div>
  );
};

const ServiceSection: React.FC<{ service: ServiceDetail; index: number; theme: Theme }> = ({ service, index, theme }) => {
  const reversed = index % 2 === 1;
  const Icon = service.icon;

  const details = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-4">
        <motion.div
          whileHover={{ rotate: -10, scale: 1.1 }}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${theme.gradient} ${theme.shadow}`}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
        <div>
          <p className={`text-xs font-extrabold tracking-widest uppercase ${theme.text}`}>{service.tagline}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3c319f] tracking-tight">{service.title}</h2>
        </div>
      </motion.div>

      <motion.p variants={itemVariants} className="text-slate-600 text-base sm:text-lg leading-relaxed">
        {service.description}
      </motion.p>

      <motion.ul variants={containerVariants} className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {service.offerings.map((offering) => (
          <motion.li key={offering} variants={itemVariants} whileHover={{ x: 4 }} className="flex items-center gap-3 text-slate-700 font-semibold">
            <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${theme.soft} ${theme.text}`}>
              <Check className="w-4 h-4" strokeWidth={3} />
            </span>
            {offering}
          </motion.li>
        ))}
      </motion.ul>

      {(service.brands || service.tools) && (
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
            {service.brands ? 'Brands' : 'Tools we use'}
          </p>
          <div className="flex flex-wrap gap-2">
            {(service.brands ?? service.tools ?? []).map((name) => (
              <span key={name} className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-sm font-extrabold text-slate-700 shadow-sm">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <motion.a
          href={whatsappLink(`Hi Vollink, I'd like a quote for ${service.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3c319f] text-white font-bold shadow-lg shadow-indigo-500/25 hover:bg-[#2e2580] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Request a quote
        </motion.a>
      </motion.div>
    </motion.div>
  );

  return (
    <section id={service.slug} className="scroll-mt-40 py-16 sm:py-20 border-b border-slate-200/70 last:border-b-0">
      {service.hasCartridgeFinder ? (
        <div className="space-y-10">
          <div className="max-w-3xl">{details}</div>
          <CartridgeFinder theme={theme} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={reversed ? 'lg:order-2' : ''}>{details}</div>
          <motion.div
            initial={{ opacity: 0, x: reversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={reversed ? 'lg:order-1' : ''}
          >
            <Gallery images={service.gallery} theme={theme} />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export const ServicesPage: React.FC<{ categoryId: CategoryId }> = ({ categoryId }) => {
  const category = categories.find((c) => c.id === categoryId) ?? categories[0];
  const other = categories.find((c) => c.id !== category.id) ?? categories[1];
  const theme = themes[category.id];
  const [active, setActive] = useState(category.services[0].slug);

  // Highlight the service whose section is crossing the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    category.services.forEach((service) => {
      const el = document.getElementById(service.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [category]);

  return (
    <MotionConfig reducedMotion="user">
      {/* overflow-x-clip (not hidden) keeps slide-in animations from widening the page without breaking the sticky jump bar */}
      <div className="bg-slate-50 text-slate-800 overflow-x-clip selection:bg-[#00a5d8] selection:text-white">
        <Hero category={category} other={other} theme={theme} />
        <SectionNav services={category.services} categoryId={category.id} active={active} theme={theme} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {category.services.map((service, index) => (
            <ServiceSection key={service.slug} service={service} index={index} theme={theme} />
          ))}
        </div>

        {/* Explore the Other Category */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.a
            href={categoryHref(other.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover="hover"
            className="group relative block overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3c319f] via-indigo-900 to-[#16123f] p-8 sm:p-12 text-white shadow-2xl shadow-indigo-900/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff14_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="space-y-3">
                <p className="text-xs font-extrabold tracking-widest uppercase text-[#5fd6ff]">Explore more</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold">{other.title}</h2>
                <p className="text-indigo-100 max-w-xl">{other.summary}</p>
                <span className="inline-flex items-center gap-2 pt-2 font-bold">
                  View {other.shortTitle}
                  <motion.span variants={{ hover: { x: 6 } }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </div>
              <div className="flex -space-x-6" aria-hidden="true">
                {other.heroImages.slice(0, 3).map((src, i) => (
                  <motion.div
                    key={src}
                    variants={{ hover: { y: -10, rotate: (i - 1) * 6 } }}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/95 p-3 shadow-xl flex items-center justify-center"
                  >
                    <img src={src} alt="" loading="lazy" className="max-w-full max-h-full object-contain" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </MotionConfig>
  );
};

export default ServicesPage;
