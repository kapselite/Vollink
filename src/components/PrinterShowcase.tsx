import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MotionValue, Variants } from 'framer-motion';
import logo from '../assets/logo.png';

type PrinterStatus = 'idle' | 'printing' | 'done';

interface InkLevel {
  code: string;
  color: string;
  level: number;
}

interface FloatingChip {
  label: string;
  className: string;
  depth: number;
  accent: string;
}

const samples = ['Flyer', 'Business Cards', 'Poster'] as const;
type SampleName = (typeof samples)[number];

const fullInk: InkLevel[] = [
  { code: 'C', color: '#00a5d8', level: 100 },
  { code: 'M', color: '#e11d74', level: 100 },
  { code: 'Y', color: '#facc15', level: 100 },
  { code: 'K', color: '#f8fafc', level: 100 },
];

const LOW_INK = 25;

const chips: FloatingChip[] = [
  { label: 'Signage', className: '-left-6 top-6', depth: 28, accent: 'bg-[#00a5d8]' },
  { label: 'T-Shirts', className: '-right-4 top-0', depth: 40, accent: 'bg-[#f60400]' },
  { label: 'Cartridges', className: '-left-10 bottom-28', depth: 36, accent: 'bg-yellow-400' },
  { label: 'Repairs', className: '-right-4 bottom-12', depth: 24, accent: 'bg-[#3c319f]' },
];

// Paper slides out of the slot line by line, then drops away for the next print
const paperVariants: Variants = {
  hidden: { y: '-100%' },
  shown: { y: '0%', transition: { duration: 1.8, ease: 'linear' } },
  gone: { y: '25%', opacity: 0, transition: { duration: 0.35, ease: 'easeIn' } },
};

const SampleArt: React.FC<{ name: SampleName }> = ({ name }) => {
  if (name === 'Flyer') {
    return (
      <div className="h-full flex flex-col gap-2">
        <div className="h-16 rounded-md bg-gradient-to-r from-[#3c319f] to-[#00a5d8] p-2.5 flex flex-col justify-end">
          <span className="text-[11px] font-black tracking-widest text-white">GRAND OPENING</span>
          <span className="text-[8px] text-white/80">This Saturday · 9 AM</span>
        </div>
        <div className="h-1.5 w-4/5 rounded bg-slate-200" />
        <div className="h-1.5 w-3/5 rounded bg-slate-200" />
        <div className="flex gap-2 flex-1">
          <div className="flex-1 rounded-md bg-[#f60400]/15" />
          <div className="flex-1 rounded-md bg-[#00a5d8]/15" />
        </div>
        <span className="self-end px-2.5 py-0.5 rounded-full bg-[#f60400] text-white text-[10px] font-black">-50%</span>
      </div>
    );
  }

  if (name === 'Business Cards') {
    return (
      <div className="h-full grid grid-cols-2 gap-2">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="relative rounded-md bg-white border border-slate-200 shadow-sm p-2 flex flex-col justify-between overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#00a5d8] via-[#3c319f] to-[#f60400]" />
            <img src={logo} alt="" className="h-5 w-auto self-start" />
            <div className="space-y-1">
              <div className="h-1 w-4/5 rounded bg-slate-300" />
              <div className="h-1 w-3/5 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-full rounded-md bg-gradient-to-b from-[#00a5d8] to-[#3c319f] p-3 flex flex-col justify-between overflow-hidden">
      <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-[#f60400]" />
      <span className="relative text-white font-black text-xl leading-none">
        PRINT IT.
        <br />
        BRAND IT.
      </span>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#16123f] [clip-path:polygon(0_100%,0_70%,30%_25%,55%_65%,80%_15%,100%_55%,100%_100%)]" />
      <span className="relative text-[9px] font-semibold text-white/80">Vollink (Pvt) Ltd</span>
    </div>
  );
};

// Badge that drifts with the cursor; deeper chips move further for a parallax feel
const ParallaxChip: React.FC<{ chip: FloatingChip; mx: MotionValue<number>; my: MotionValue<number>; index: number }> = ({
  chip,
  mx,
  my,
  index,
}) => {
  const x = useTransform(mx, [-0.5, 0.5], [-chip.depth, chip.depth]);
  const y = useTransform(my, [-0.5, 0.5], [-chip.depth, chip.depth]);

  return (
    <motion.div style={{ x, y }} className={`absolute z-30 hidden sm:block ${chip.className}`}>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-lg shadow-slate-300/50 text-sm font-bold text-[#3c319f]"
      >
        <span className={`w-2.5 h-2.5 rounded-full ${chip.accent}`} />
        {chip.label}
      </motion.div>
    </motion.div>
  );
};

export const PrinterShowcase: React.FC = () => {
  const [status, setStatus] = useState<PrinterStatus>('idle');
  const [sheet, setSheet] = useState<number | null>(null);
  const [printCount, setPrintCount] = useState(0);
  const [ink, setInk] = useState<InkLevel[]>(fullInk);

  const isLow = ink.some((cartridge) => cartridge.level < LOW_INK);

  // Mouse position across the stage, from -0.5 to 0.5
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  const startPrint = (next: number) => {
    setSheet(next);
    setPrintCount((count) => count + 1);
    setStatus('printing');
  };

  // Print the first sample shortly after load so visitors see it in action
  useEffect(() => {
    const timer = setTimeout(() => {
      setSheet(0);
      setPrintCount(1);
      setStatus('printing');
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const handlePress = () => {
    if (status === 'printing') return;

    if (isLow) {
      setInk(fullInk);
      setStatus('idle');
      return;
    }

    setInk((levels) =>
      levels.map((cartridge) => ({
        ...cartridge,
        level: Math.max(0, cartridge.level - (10 + Math.round(Math.random() * 14))),
      })),
    );
    startPrint(sheet === null ? 0 : (sheet + 1) % samples.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  let statusText = 'READY';
  if (status === 'printing' && sheet !== null) statusText = `PRINTING ${samples[sheet].toUpperCase()}...`;
  else if (isLow) statusText = 'INK LOW - PRESS TO REFILL';
  else if (status === 'done') statusText = 'DONE ✓ PRESS FOR NEXT';

  const caption =
    isLow && status !== 'printing'
      ? 'Running low? We stock genuine HP & Canon cartridges. Press the button to refill.'
      : 'Press the red button to print a sample.';

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md mx-auto py-6 [perspective:1200px] select-none"
    >
      {chips.map((chip, index) => (
        <ParallaxChip key={chip.label} chip={chip} mx={smoothX} my={smoothY} index={index} />
      ))}

      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative">
        {/* Paper waiting in the input tray */}
        <div className="relative mx-auto w-[62%] h-14 translate-y-3 rounded-t-lg bg-white border border-slate-200 shadow-md" />

        {/* Printer Body */}
        <div className="relative z-10 rounded-[28px] bg-gradient-to-b from-[#2a2470] to-[#16123f] p-5 pb-6 shadow-2xl shadow-indigo-900/40 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex-1 min-w-0 h-11 rounded-xl bg-[#0b0a24] border border-[#00a5d8]/30 px-3 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={statusText}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className={`font-mono text-[11px] sm:text-xs font-semibold tracking-wider truncate ${
                    isLow && status !== 'printing' ? 'text-yellow-300' : 'text-[#5fd6ff]'
                  }`}
                  aria-live="polite"
                >
                  {statusText}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.button
              type="button"
              onClick={handlePress}
              disabled={status === 'printing'}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isLow ? 'Refill ink cartridges' : 'Print a sample'}
              className="relative w-14 h-14 shrink-0 rounded-full bg-[#f60400] text-white flex items-center justify-center shadow-lg shadow-red-500/40 border-4 border-[#16123f] ring-2 ring-white/10 disabled:opacity-70 disabled:cursor-wait focus:outline-none focus-visible:ring-[#00a5d8]"
            >
              {status !== 'printing' && (
                <motion.span
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-[#f60400] pointer-events-none"
                />
              )}
              <svg className="relative w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isLow ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* CMYK Ink Levels */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {ink.map((cartridge) => (
              <div key={cartridge.code} className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-white/60">
                  <span>{cartridge.code}</span>
                  <span>{cartridge.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ width: `${cartridge.level}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: cartridge.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Output Slot */}
          <div className="relative mt-5 mx-6 h-2.5 rounded-full bg-black/60 shadow-inner">
            {status === 'printing' && (
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="absolute inset-x-4 -top-0.5 h-1 rounded-full bg-[#00a5d8] blur-[2px]"
              />
            )}
          </div>
        </div>

        {/* Printed Output */}
        <div className="relative z-20 mx-auto w-[70%] -mt-6 h-56 sm:h-64 overflow-hidden">
          <AnimatePresence mode="wait">
            {sheet !== null && (
              <motion.div
                key={printCount}
                variants={paperVariants}
                initial="hidden"
                animate="shown"
                exit="gone"
                onAnimationComplete={(definition) => {
                  if (definition === 'shown') setStatus('done');
                }}
                className="h-full rounded-b-md bg-white border border-slate-200 shadow-xl p-3"
              >
                <SampleArt name={samples[sheet]} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Caption */}
      <div className="mt-4 text-center min-h-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={caption}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="text-sm text-slate-500"
          >
            {sheet !== null && (
              <span className="font-semibold text-[#3c319f]">Sample: {samples[sheet]} · </span>
            )}
            {caption}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
