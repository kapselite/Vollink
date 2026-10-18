import React, { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  renderItem: (item: string) => React.ReactNode;
  // Seconds for one full loop of the items
  duration?: number;
  reverse?: boolean;
}

// Keep a value inside [min, max) so the track loops seamlessly
const wrap = (min: number, max: number, value: number) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  renderItem,
  duration = 30,
  reverse = false,
}) => {
  const baseX = useMotionValue(0);
  const paused = useRef(false);
  const reduceMotion = useReducedMotion();
  const x = useTransform(baseX, (value) => `${wrap(-50, 0, value)}%`);

  // Repeat the items so each half of the track is wider than the screen
  const half = Array.from({ length: 4 }, () => items).flat();
  const track = [...half, ...half];

  useAnimationFrame((_, delta) => {
    if (paused.current || reduceMotion) return;
    const percentPerMs = 50 / (duration * 1000);
    baseX.set(baseX.get() + (reverse ? 1 : -1) * percentPerMs * delta);
  });

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
    >
      <motion.div style={{ x }} className="flex w-max gap-4 py-2">
        {track.map((item, index) => (
          <div key={`${item}-${index}`} aria-hidden={index >= items.length}>
            {renderItem(item)}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
